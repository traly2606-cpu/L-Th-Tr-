import React, { useState } from 'react';
import {
  UserCheck,
  Shield,
  Copy,
  Check,
  PhoneCall,
  AlertOctagon,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Users,
  Compass,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ResponseAssistantProps {
  onOpenEmergency: () => void;
}

export const ResponseAssistant: React.FC<ResponseAssistantProps> = ({ onOpenEmergency }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [selectedTone, setSelectedTone] = useState<'firm' | 'polite' | 'delay'>('firm');
  const [copied, setCopied] = useState(false);

  const scenarios = [
    {
      title: 'Bị ép cho chép bài / Làm bài tập hộ',
      tag: 'Học tập & Tình bạn',
      context: 'Bạn cùng lớp hoặc bạn thân đòi chép bài thi, đòi làm slide thuyết trình hộ và đe dọa tình bạn nếu bạn từ chối.',
      templates: {
        firm: {
          text: 'Tớ rất quý tình bạn giữa hai đứa mình, nhưng việc thi cử là đánh giá năng lực cá nhân và trường kỷ luật rất gắt. Tớ không thể cho cậu chép được. Nếu phần nào chưa hiểu, tối nay về tớ có thể giải thích lại cho cậu.',
          tip: 'Tách biệt rõ giữa việc "từ chối hành vi sai trái" và "tình cảm bạn bè".',
        },
        polite: {
          text: 'Tớ đang phải tập trung làm bài của tớ nên không hỗ trợ cậu được đâu. Cậu cứ tự tin làm theo những gì đã ôn tập nhé!',
          tip: 'Tập trung vào sự bận rộn chính đáng của bản thân để giảm xung đột trực diện.',
        },
        delay: {
          text: 'Giám thị đang đứng ngay sau lưng tớ này, tớ không dám quay ngang quay ngửa đâu.',
          tip: 'Sử dụng yếu tố ngoại cảnh khách quan để tạm hoãn yêu cầu ép buộc.',
        },
      },
    },
    {
      title: 'Bị đòi mật khẩu mạng xã hội / Bắt chia sẻ định vị',
      tag: 'Quyền riêng tư & Tình cảm',
      context: 'Đối phương ép bạn phải đưa mật khẩu Facebook, Zalo hoặc bắt định vị 24/7 để "chứng minh tình cảm".',
      templates: {
        firm: {
          text: 'Tớ tin sự tin tưởng giữa hai người đến từ sự chân thành, không phải bằng việc kiểm soát nhau. Tài khoản của tớ có những cuộc trò chuyện riêng tư của gia đình và bạn bè, tớ mong cậu tôn trọng không gian riêng của tớ.',
          tip: 'Khẳng định quyền riêng tư là quyền cơ bản, không phải bằng chứng của sự giấu diếm.',
        },
        polite: {
          text: 'Tài khoản tớ cài xác thực 2 lớp qua số điện thoại của phụ huynh nên tớ không chia sẻ được. Chúng mình cứ trò chuyện thẳng thắn với nhau là tốt nhất mà.',
          tip: 'Dùng quy tắc an toàn tài khoản làm lý do khách quan không thể chối cãi.',
        },
        delay: {
          text: 'Chuyện này chúng mình nên gặp nhau nói chuyện trực tiếp sau giờ học, tớ không muốn trao đổi việc bảo mật qua tin nhắn.',
          tip: 'Không đưa ra quyết định nhượng bộ vội vã khi đang bị dồn ép trên mạng.',
        },
      },
    },
    {
      title: 'Bị ép nghỉ chơi với nhóm khác / Cô lập xã hội',
      tag: 'Kiểm soát nhóm bạn',
      context: 'Một người bạn cấm bạn tham gia câu lạc bộ, cấm nói chuyện với bạn khác hoặc bắt bạn rời nhóm chat chung.',
      templates: {
        firm: {
          text: 'Tớ coi trọng tình bạn với cậu, nhưng tớ cũng có các mối quan hệ và hoạt động học tập khác. Cậu không có quyền cấm đoán tớ giao tiếp với ai. Tớ hy vọng cậu tôn trọng cuộc sống cá nhân của tớ.',
          tip: 'Vạch rõ giới hạn tự do cá nhân mà không cần thanh minh hay xin lỗi.',
        },
        polite: {
          text: 'Đó chỉ là nhóm trao đổi bài tập và câu lạc bộ của trường thôi mà, không ảnh hưởng gì đến tình bạn của chúng mình cả. Cậu đừng lo lắng nhé!',
          tip: 'Xoa dịu sự lo lắng quá mức nhưng vẫn giữ nguyên lập trường tham gia hoạt động.',
        },
        delay: {
          text: 'Hiện tại tớ có trách nhiệm đã nhận với ban tổ chức nên tớ cần hoàn thành. Khi nào xong việc chúng mình nói chuyện sau nhé.',
          tip: 'Nhấn mạnh trách nhiệm tập thể để tránh bị lôi kéo vào tranh cãi tay đôi.',
        },
      },
    },
    {
      title: 'Bị lợi dụng lòng tin mượn tiền / Mượn tài khoản',
      tag: 'Tài chính & An toàn số',
      context: 'Bạn bè viện lý do cấp bách để vay tiền liên tục hoặc nhờ bạn đưa mã OTP, cho mượn thông tin cá nhân.',
      templates: {
        firm: {
          text: 'Tớ chỉ là học sinh và tiền tiêu vặt do bố mẹ quản lý chặt chẽ nên tớ không thể cho mượn được. Cậu nên trao đổi trực tiếp với gia đình cậu để có khoản chi tiêu phù hợp nhé.',
          tip: 'Chặn đứng việc vay mượn bằng cách nêu rõ quyền quản lý tài chính của gia đình.',
        },
        polite: {
          text: 'Tiền tháng này tớ phải đóng tiền học phí và mua sách vở hết rồi nên tớ không còn dư để giúp cậu được, thông cảm cho tớ nha!',
          tip: 'Từ chối dứt khoát với lý do học tập thiết yếu.',
        },
        delay: {
          text: 'Mã OTP là mã bảo mật ngân hàng/tin nhắn riêng tư, bố mẹ tớ dặn tuyệt đối không được đọc cho bất kỳ ai.',
          tip: 'Đối với mã OTP, từ chối ngay lập tức và tuyệt đối không bao giờ chia sẻ.',
        },
      },
    },
    {
      title: 'Bị đe dọa bóc phốt / Tống tiền / Tung ảnh riêng tư',
      tag: 'Tình huống khẩn cấp',
      context: 'Kẻ xấu dọa tung tin nhắn hoặc hình ảnh nhạy cảm lên mạng xã hội nếu bạn không làm theo yêu sách.',
      templates: {
        firm: {
          text: 'Hành vi đe dọa tống tiền và phát tán hình ảnh riêng tư là hành vi vi phạm pháp luật hình sự. Toàn bộ tin nhắn và tài khoản này của bạn đã được chụp lại lưu làm bằng chứng gửi cơ quan chức năng. Tôi sẽ không chuyển bất kỳ khoản tiền nào.',
          tip: 'Thông báo rõ hành vi vi phạm pháp luật, sau đó NGỪNG PHẢN HỒI và báo ngay người lớn/111.',
        },
        polite: {
          text: 'Tôi yêu cầu bạn chấm dứt ngay hành vi đe dọa này. Mọi việc đều có sự can thiệp của người lớn và pháp luật bảo vệ.',
          tip: 'Giữ thái độ lạnh lùng, không bộc lộ sự van xin hay sợ hãi.',
        },
        delay: {
          text: '[KHÔNG TRẢ LỜI THÊM] Hãy lập tức chụp màn hình toàn bộ bằng chứng, không xóa tin nhắn và gọi ngay Tổng đài 111 hoặc báo cho phụ huynh.',
          tip: 'Với tình huống tống tiền, im lặng hành động và báo cáo pháp luật là an toàn nhất.',
        },
      },
    },
  ];

  const currentScenario = scenarios[selectedScenarioIndex];
  const currentTemplate = currentScenario.templates[selectedTone];

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Hộp công cụ ứng phó thực chiến</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Trợ lý ứng phó & Thiết lập ranh giới an toàn
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Tự tin làm chủ cuộc trò chuyện với các mẫu phản hồi tâm lý học đường, quy trình S.A.F.E và các kênh hỗ trợ chính thống tại Việt Nam.
        </p>
      </div>

      {/* Interactive Scenario Script Generator */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-blue-50/50 via-teal-50/50 to-white">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-teal-600" />
            Bộ tạo kịch bản phản hồi theo tình huống học đường
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Chọn tình huống bạn đang đối mặt và lựa chọn phong cách trả lời phù hợp
          </p>

          {/* Scenario Selector Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {scenarios.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedScenarioIndex(idx)}
                className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all ${
                  selectedScenarioIndex === idx
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                Bối cảnh tình huống: {currentScenario.tag}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                {currentScenario.context}
              </p>
            </div>
          </div>

          {/* Tone Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Chọn phong cách phản hồi:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                onClick={() => setSelectedTone('firm')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTone === 'firm'
                    ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-200'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Kiên quyết & Rõ ràng</div>
                <div className="text-[11px] text-slate-500">Thiết lập ranh giới dứt khoát</div>
              </button>

              <button
                onClick={() => setSelectedTone('polite')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTone === 'polite'
                    ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-200'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Lịch sự & Bình tĩnh</div>
                <div className="text-[11px] text-slate-500">Giảm bớt sự căng thẳng</div>
              </button>

              <button
                onClick={() => setSelectedTone('delay')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedTone === 'delay'
                    ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-200'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Trì hoãn an toàn</div>
                <div className="text-[11px] text-slate-500">Mua thêm thời gian suy nghĩ</div>
              </button>
            </div>
          </div>

          {/* Script Output Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-teal-400 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4" />
                Mẫu tin nhắn bạn có thể gửi:
              </span>
              <button
                onClick={() => handleCopyText(currentTemplate.text)}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Đã chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép tin nhắn</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm sm:text-base leading-relaxed text-slate-100 font-medium select-all">
              "{currentTemplate.text}"
            </div>

            <div className="text-xs text-teal-200/90 flex items-center gap-1.5">
              <span>💡</span>
              <span><strong>Mẹo tâm lý:</strong> {currentTemplate.tip}</span>
            </div>
          </div>
        </div>
      </div>

      {/* S.A.F.E Framework Protocol */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-800 mb-2">
            Quy trình chuẩn
          </span>
          <h3 className="text-xl font-extrabold text-slate-900">
            Quy tắc 4 bước S.A.F.E khi gặp tin nhắn tiêu cực hoặc ép buộc
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Ghi nhớ 4 chữ cái này để giữ sự tự chủ và an toàn cảm xúc trong mọi tình huống giao tiếp mạng
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center">
              S
            </div>
            <h4 className="font-bold text-slate-900 text-base">STOP (Dừng lại)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Không bấm trả lời ngay khi đang giận dữ, hoảng loạn hay bối rối. Đặt điện thoại xuống 5 phút, hít thở sâu để lấy lại sự tỉnh táo.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-black text-lg flex items-center justify-center">
              A
            </div>
            <h4 className="font-bold text-slate-900 text-base">ARCHIVE (Lưu chứng cứ)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chụp ảnh màn hình toàn bộ tin nhắn, tên tài khoản, thời gian và nội dung trước khi đối phương kịp thu hồi tin nhắn hoặc xóa tài khoản.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-black text-lg flex items-center justify-center">
              F
            </div>
            <h4 className="font-bold text-slate-900 text-base">FIRM (Ranh giới)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Đưa ra câu trả lời ngắn gọn, dứt khoát xác lập ranh giới. Nếu đối phương tiếp tục lăng mạ hoặc làm phiền, hãy chặn (block) an toàn.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white font-black text-lg flex items-center justify-center">
              E
            </div>
            <h4 className="font-bold text-slate-900 text-base">ESCALATE (Báo cáo)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nếu có dấu hiệu đe dọa, tống tiền hoặc bất an kéo dài, hãy mở lời với cha mẹ, thầy cô, hoặc gọi ngay Tổng đài 111 để được bảo vệ.
            </p>
          </div>
        </div>
      </div>

      {/* Official Support Helplines in Vietnam */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-teal-400" />
              Mạng lưới đường dây nóng bảo vệ học sinh tại Việt Nam
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Bạn không bao giờ phải đối mặt với khó khăn hay sợ hãi một mình
            </p>
          </div>

          <button
            onClick={onOpenEmergency}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            Mở sổ tay khẩn cấp
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-red-500/80 text-white px-2 py-0.5 rounded">
              Miễn phí 24/7
            </span>
            <div className="text-2xl font-black text-teal-300">111</div>
            <h4 className="font-bold text-sm text-white">Tổng đài Quốc gia Bảo vệ Trẻ em</h4>
            <p className="text-xs text-slate-300">
              Tiếp nhận mọi cuộc gọi tư vấn tâm lý, can thiệp bạo lực mạng, tống tiền đối với học sinh dưới 18 tuổi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/80 text-white px-2 py-0.5 rounded">
              13h00 - 20h30
            </span>
            <div className="text-xl font-bold text-teal-300">096 306 1414</div>
            <h4 className="font-bold text-sm text-white">Đường dây nóng Ngày Mai</h4>
            <p className="text-xs text-slate-300">
              Đội ngũ chuyên viên tâm lý lắng nghe, hỗ trợ trầm cảm, căng thẳng, khủng hoảng cảm xúc tuổi học trò.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/80 text-white px-2 py-0.5 rounded">
              Tại trường học
            </span>
            <div className="text-xl font-bold text-teal-300">Phòng Tư Vấn</div>
            <h4 className="font-bold text-sm text-white">Tư vấn tâm lý học đường</h4>
            <p className="text-xs text-slate-300">
              Gặp gỡ thầy cô phụ trách phòng tâm lý của trường để được hướng dẫn phương án hòa giải hoặc bảo vệ an toàn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
