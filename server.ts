import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '2mb' }));

// Initialize Google GenAI client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// 6 Target manipulation behavior categories
export interface BehaviorCategoryResult {
  categoryId: string;
  categoryName: string;
  detected: boolean;
  level: 'none' | 'low' | 'medium' | 'high';
  explanation: string;
}

export interface NoteworthyQuote {
  quote: string;
  categoryName: string;
  reason: string;
}

export interface SuggestedReply {
  style: string;
  replyText: string;
  note: string;
}

export interface AnalysisResponseData {
  overview: string;
  isEmergency: boolean;
  emergencyNotice?: string;
  categories: BehaviorCategoryResult[];
  noteworthyQuotes: NoteworthyQuote[];
  safeGuidance: string;
  suggestedReplies: SuggestedReply[];
  actionSteps: string[];
  disclaimer: string;
}

// System prompt enforcing all required criteria
const MINDGUARD_SYSTEM_INSTRUCTION = `
Bạn là MINDGUARD AI - Trợ lý phân tích an toàn tâm lý số dành cho học sinh THPT Việt Nam (từ 15-18 tuổi).
Nhiệm vụ của bạn là hỗ trợ học sinh nhận diện các dấu hiệu đáng lưu tâm trong giao tiếp mạng và hướng dẫn phản hồi an toàn, văn minh.

CÁC NGUYÊN TẮC BẮT BUỘC (TUÂN THỦ TUYỆT ĐỐI):
1. KHÔNG khẳng định hoặc quy chụp một người chắc chắn là "kẻ thao túng", "kẻ độc hại" chỉ từ một đoạn hội thoại trích đoạn. Hãy dùng các từ ngữ khách quan: "Dấu hiệu đáng lưu tâm", "Mẫu giao tiếp có thể gây áp lực tâm lý", "Hành vi cần đặt ranh giới".
2. KHÔNG sử dụng điểm số để chẩn đoán tâm lý, không đưa ra kết luận tâm thần học hoặc phán xét nhân cách cá nhân.
3. Phân biệt rõ ràng giữa "dấu hiệu đáng chú ý" (cautionary signs) và "bằng chứng xác thực" (conclusive proof). Giải thích khách quan bối cảnh ngôn ngữ.
4. ƯU TIÊN TUYỆT ĐỐI NẾU CÓ DẤU HIỆU NGUY CẤP:
   Nếu phát hiện dấu hiệu đe dọa vũ lực, tống tiền, ép gửi/đe dọa phát tán hình ảnh riêng tư (ảnh nhạy cảm/nudes), đe dọa tự hại để gây áp lực, hay cô lập tột cùng:
   - Đặt isEmergency = true.
   - Phần emergencyNotice và actionSteps phải ưu tiên hàng đầu: Khuyên học sinh giữ bình tĩnh, KHÔNG làm theo yêu sách, TUYỆT ĐỐI KHÔNG gửi thêm tiền/ảnh, CHỤP ẢNH MÀN HÌNH lưu bằng chứng, liên hệ ngay Tổng đài Quốc gia Bảo vệ Trẻ em 111 (miễn phí), báo cho cha mẹ, giáo viên hoặc cơ quan công an.
5. Luôn phân tích dựa trên 6 nhóm hành vi cụ thể sau:
   - gay_ap_luc_tinh_cam: Gây áp lực tình cảm (dùng tình bạn/tình cảm để ép buộc: "Nếu bạn coi tôi là bạn thì...")
   - gay_cam_giac_toi_loi: Gây cảm giác tội lỗi (đổ lỗi nạn nhân, làm đối phương thấy mình luôn có lỗi: "Tất cả là do cậu...")
   - kiem_soat_va_co_lap: Kiểm soát và cô lập (cấm đoán chơi với người khác, bắt báo cáo lịch trình, ép rời nhóm...)
   - de_doa_va_uy_hiep: Đe dọa và uy hiếp (dọa bóc phốt, dọa đăng tin nhắn, dọa đánh, dọa tung bí mật...)
   - loi_dung_long_tin: Lợi dụng lòng tin (mượn tiền không trả, hỏi mật khẩu/mã OTP, xin làm hộ bài...)
   - xam_pham_quyen_rieng_tu: Xâm phạm quyền riêng tư (đòi xem trộm tin nhắn, theo dõi định vị, hỏi thông tin nhạy cảm...)
6. Trích dẫn chính xác các câu nói trong đoạn hội thoại và giải thích rõ tại sao câu nói đó là dấu hiệu đáng cảnh giác.
7. Đưa ra hướng dẫn ứng phó an toàn và các mẫu câu phản hồi phù hợp với lứa tuổi học sinh THPT (tự tin, lịch sự, kiên quyết thiết lập ranh giới).
8. Ngôn ngữ hoàn toàn bằng tiếng Việt thân thiện, thấu cảm, dễ hiểu với học sinh.
`;

app.post('/api/analyze-conversation', async (req, res) => {
  try {
    const { conversation } = req.body;

    if (!conversation || typeof conversation !== 'string' || conversation.trim().length === 0) {
      return res.status(400).json({
        error: 'Vui lòng nhập đoạn hội thoại cần phân tích.',
      });
    }

    const trimmedText = conversation.trim();
    if (trimmedText.length > 8000) {
      return res.status(400).json({
        error: 'Đoạn hội thoại quá dài (tối đa 8.000 ký tự). Vui lòng rút gọn đoạn cần phân tích.',
      });
    }

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured yet
      return res.status(500).json({
        error: 'Chưa cấu hình GEMINI_API_KEY. Vui lòng kiểm tra Settings > Secrets.',
      });
    }

    // Helper function to call Gemini with retries
    async function callGeminiWithRetry(prompt: string, maxRetries = 2) {
      let delay = 1000;
      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          if (!ai) throw new Error('AI client is not initialized');
          const res = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: prompt,
            config: {
              systemInstruction: MINDGUARD_SYSTEM_INSTRUCTION,
              responseMimeType: 'application/json',
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  overview: {
                    type: Type.STRING,
                    description: 'Tóm tắt tổng quan khách quan về ngữ cảnh cuộc trò chuyện mà không chụp mũ nhân vật.',
                  },
                  isEmergency: {
                    type: Type.BOOLEAN,
                    description: 'True nếu có đe dọa, tống tiền, đòi hỏi hình ảnh riêng tư nhạy cảm, dọa tự tử hoặc nguy hiểm thể chất.',
                  },
                  emergencyNotice: {
                    type: Type.STRING,
                    description: 'Khuyến cáo khẩn cấp nếu isEmergency=true, nhắc đến Tổng đài 111 và bảo vệ chứng cứ.',
                  },
                  categories: {
                    type: Type.ARRAY,
                    description: 'Đánh giá chi tiết về 6 nhóm hành vi.',
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        categoryId: {
                          type: Type.STRING,
                          description: 'Một trong: gay_ap_luc_tinh_cam, gay_cam_giac_toi_loi, kiem_soat_va_co_lap, de_doa_va_uy_hiep, loi_dung_long_tin, xam_pham_quyen_rieng_tu',
                        },
                        categoryName: {
                          type: Type.STRING,
                          description: 'Tên tiếng Việt của nhóm hành vi.',
                        },
                        detected: {
                          type: Type.BOOLEAN,
                          description: 'Có phát hiện dấu hiệu của nhóm này hay không.',
                        },
                        level: {
                          type: Type.STRING,
                          description: 'Mức độ cảnh báo: none, low, medium, hoặc high',
                        },
                        explanation: {
                          type: Type.STRING,
                          description: 'Giải thích ngắn gọn tại sao có hoặc không có dấu hiệu này trong ngữ cảnh.',
                        },
                      },
                      required: ['categoryId', 'categoryName', 'detected', 'level', 'explanation'],
                    },
                  },
                  noteworthyQuotes: {
                    type: Type.ARRAY,
                    description: 'Danh sách các câu nói đáng chú ý trích trực tiếp từ hội thoại.',
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        quote: {
                          type: Type.STRING,
                          description: 'Câu nói trích nguyên văn hoặc một phần từ hội thoại.',
                        },
                        categoryName: {
                          type: Type.STRING,
                          description: 'Nhóm hành vi liên quan.',
                        },
                        reason: {
                          type: Type.STRING,
                          description: 'Vì sao câu nói này là dấu hiệu đáng cảnh giác (phân tích tâm lý/áp lực đối phương áp đặt).',
                        },
                      },
                      required: ['quote', 'categoryName', 'reason'],
                    },
                  },
                  safeGuidance: {
                    type: Type.STRING,
                    description: 'Lời khuyên định hướng an toàn, giúp bạn học sinh giữ bình tĩnh và nhìn nhận thấu đáo.',
                  },
                  suggestedReplies: {
                    type: Type.ARRAY,
                    description: 'Gợi ý 2-3 cách phản hồi mẫu phù hợp với lứa tuổi THPT.',
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        style: {
                          type: Type.STRING,
                          description: 'Phong cách: ví dụ "Thiết lập ranh giới bình tĩnh", "Trì hoãn an toàn", "Từ chối dứt khoát"',
                        },
                        replyText: {
                          type: Type.STRING,
                          description: 'Đoạn tin nhắn mẫu bạn học sinh có thể tham khảo hoặc sao chép.',
                        },
                        note: {
                          type: Type.STRING,
                          description: 'Lưu ý khi sử dụng câu trả lời này.',
                        },
                      },
                      required: ['style', 'replyText', 'note'],
                    },
                  },
                  actionSteps: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: 'Các bước hành động cụ thể để học sinh tự bảo vệ bản thân và tâm lý.',
                  },
                  disclaimer: {
                    type: Type.STRING,
                    description: 'Tuyên bố miễn trừ trách nhiệm giáo dục (không phải kết luận pháp lý hay chẩn đoán lâm sàng).',
                  },
                },
                required: [
                  'overview',
                  'isEmergency',
                  'categories',
                  'noteworthyQuotes',
                  'safeGuidance',
                  'suggestedReplies',
                  'actionSteps',
                  'disclaimer',
                ],
              },
            },
          });
          return res;
        } catch (error: any) {
          if (attempt < maxRetries && (error?.status === 503 || error?.status === 429 || error?.code === 503)) {
            console.warn(`Gemini call attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
            await new Promise((r) => setTimeout(r, delay));
            delay *= 2;
          } else {
            throw error;
          }
        }
      }
      throw new Error('Đã thử lại nhiều lần nhưng không thành công.');
    }

    const response = await callGeminiWithRetry(
      `Hãy phân tích đoạn hội thoại sau từ góc nhìn hỗ trợ học sinh THPT nhận diện dấu hiệu tâm lý và an toàn mạng:\n\n"""\n${trimmedText}\n"""`
    );

    const rawText = response.text;
    if (!rawText) {
      throw new Error('Không nhận được dữ liệu từ mô hình AI.');
    }

    const parsedData = JSON.parse(rawText);
    return res.json({ success: true, data: parsedData });
  } catch (err: unknown) {
    console.error('Error during conversation analysis:', err);
    const errorMessage = err instanceof Error ? err.message : 'Đã có lỗi xảy ra trong quá trình phân tích.';
    return res.status(500).json({
      error: `Phân tích thất bại: ${errorMessage}`,
    });
  }
});

// Start Express server and connect Vite in development
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`MINDGUARD server running on port ${PORT} (prod=${isProduction})`);
  });
}

startServer();
