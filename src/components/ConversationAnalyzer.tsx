import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  RotateCcw,
  Trash2,
  Copy,
  Check,
  Info,
  Quote,
  Send,
  Lock,
  PhoneCall,
  ExternalLink,
  ChevronRight,
  MessageSquare,
  BookmarkCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { AnalysisResponseData } from '../types';
import { SAMPLE_CONVERSATIONS } from '../data/sampleConversations';

interface ConversationAnalyzerProps {
  onOpenEmergency: () => void;
  onExploreCategory?: (categoryId: string) => void;
}

export const ConversationAnalyzer: React.FC<ConversationAnalyzerProps> = ({
  onOpenEmergency,
  onExploreCategory,
}) => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResponseData | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [summaryCopied, setSummaryCopied] = useState(false);

  // Quick load a sample conversation
  const handleLoadSample = (sampleId: string) => {
    const sample = SAMPLE_CONVERSATIONS.find((s) => s.id === sampleId);
    if (sample) {
      setInputText(sample.content);
      setError(null);
    }
  };

  // Clear text only
  const handleClearText = () => {
    setInputText('');
    setError(null);
  };

  // Reset all (input and analysis)
  const handleResetAll = () => {
    setInputText('');
    setResult(null);
    setError(null);
  };

  // Copy sample reply to clipboard
  const handleCopyReply = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Copy summary report
  const handleCopySummary = () => {
    if (!result) return;
    const textToCopy = `[MINDGUARD - Báo cáo phân tích hội thoại]\n\n` +
      `TỔNG QUAN: ${result.overview}\n\n` +
      `HƯỚNG DẪN ỨNG PHÓ AN TOÀN:\n${result.safeGuidance}\n\n` +
      `CÁC BƯỚC HÀNH ĐỘNG:\n${result.actionSteps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n` +
      `* Lưu ý: ${result.disclaimer}`;
    navigator.clipboard.writeText(textToCopy);
    setSummaryCopied(true);
    setTimeout(() => setSummaryCopied(false), 2000);
  };

  // Submit to backend
  const handleAnalyze = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) {
      setError('Vui lòng dán hoặc nhập một đoạn hội thoại trước khi bấm phân tích.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/analyze-conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversation: inputText }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || 'Máy chủ gặp sự cố khi xử lý dữ liệu.');
      }

      if (resData.data) {
        setResult(resData.data);
        // Scroll smoothly to results
        setTimeout(() => {
          const resultElement = document.getElementById('analysis-result-section');
          if (resultElement) {
            resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Không thể kết nối đến hệ thống phân tích.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Intro Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white p-6 sm:p-10 shadow-xl border border-blue-700/50">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-teal-200 text-xs font-semibold border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Phân tích văn minh & an toàn với Gemini AI</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            Nhận diện dấu hiệu thao túng tâm lý trong tin nhắn của bạn
          </h1>

          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Bạn đang cảm thấy bất an, bị ép buộc hay dằn vặt vì một đoạn tin nhắn? MINDGUARD giúp bạn trích xuất các câu nói đáng chú ý, hiểu rõ cơ chế tâm lý và gợi ý kịch bản phản hồi văn minh, tự bảo vệ ranh giới cá nhân.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-teal-100">
            <span className="flex items-center gap-1.5 bg-blue-950/40 px-3 py-1.5 rounded-lg border border-blue-700/50">
              <Lock className="w-3.5 h-3.5 text-teal-400" />
              Không lưu trữ nội dung tin nhắn
            </span>
            <span className="flex items-center gap-1.5 bg-blue-950/40 px-3 py-1.5 rounded-lg border border-blue-700/50">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              Không dán nhãn hay chẩn đoán cá nhân
            </span>
          </div>
        </div>
      </div>

      {/* Input Section Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Safety Warning Header */}
        <div className="bg-amber-50/80 border-b border-amber-200/80 px-4 sm:px-6 py-3.5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-snug">
            <strong>Cảnh báo bảo mật & an toàn dữ liệu:</strong> Vui lòng <strong>KHÔNG</strong> nhập họ tên thật, số điện thoại, địa chỉ trường lớp, mật khẩu hoặc bất kỳ hình ảnh nhạy cảm nào. Bạn có thể thay thế tên người bằng các chữ cái (A, B, Bạn...). Hệ thống xử lý trực tiếp trên bộ nhớ tạm thời và hoàn toàn không lưu trữ dữ liệu của bạn.
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-5">
          {/* Sample quick selectors */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Hoặc bấm thử các đoạn hội thoại mẫu thực tế của học sinh THPT:
            </label>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_CONVERSATIONS.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleLoadSample(sample.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all hover:scale-[1.02] flex items-center gap-1.5 ${sample.badgeColor} hover:shadow-xs`}
                  title={sample.description}
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>{sample.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleAnalyze} className="space-y-4">
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Dán hoặc gõ đoạn tin nhắn bạn muốn phân tích vào đây...&#10;Ví dụ:&#10;A: Nếu cậu coi tớ là bạn thì phải cho tớ chép bài chứ...&#10;Bạn: Thầy cô coi gắt lắm, tớ sợ...&#10;A: Cậu tính toán ích kỷ thế, chiều nay tớ trượt là do cậu đấy!"
                rows={7}
                className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm text-slate-800 placeholder-slate-400 font-normal outline-none transition-all resize-y"
              />
              <div className="absolute bottom-3 right-3 text-xs text-slate-400">
                {inputText.length} / 8000 ký tự
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                <div>{error}</div>
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClearText}
                  disabled={!inputText || loading}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                  title="Xóa nội dung ô nhập"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa nội dung</span>
                </button>

                {(inputText || result) && (
                  <button
                    type="button"
                    onClick={handleResetAll}
                    disabled={loading}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors disabled:opacity-40 flex items-center gap-1.5"
                    title="Làm mới hoàn toàn"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm mới phân tích</span>
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !inputText.trim()}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-teal-600 to-teal-700 hover:from-blue-700 hover:to-teal-800 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Gemini đang phân tích chuyên sâu...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Phân tích hội thoại</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Loading state skeleton */}
      {loading && (
        <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4 shadow-sm animate-pulse">
          <div className="inline-flex p-3 bg-teal-50 rounded-2xl">
            <Sparkles className="w-8 h-8 text-teal-600 animate-spin" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-slate-800 text-base">Đang đối chiếu với 6 nhóm hành vi thao túng tâm lý mạng...</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Hệ thống đang trích xuất câu nói đáng lưu ý, phân tích cơ chế tâm lý và xây dựng kịch bản ứng phó an toàn cho bạn.
            </p>
          </div>
        </div>
      )}

      {/* Analysis Result Display */}
      {result && (
        <div id="analysis-result-section" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Important Philosophy & Disclaimer Notice */}
          <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200/80 flex items-start gap-3 text-xs text-blue-900">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Nguyên tắc khách quan của MINDGUARD:</strong> Các nhận định dưới đây chỉ ra các <em>dấu hiệu giao tiếp đáng lưu tâm</em> dựa trên ngữ cảnh được cung cấp, không phải là kết luận chẩn đoán tâm thần học hay quy kết nhân cách của bất kỳ cá nhân nào. Luôn có sự khác biệt giữa một dấu hiệu cần cẩn trọng và bằng chứng pháp lý xác thực.
            </div>
          </div>

          {/* CRITICAL EMERGENCY BANNER if threats or extortion */}
          {result.isEmergency && (
            <div className="p-6 bg-red-50 border-2 border-red-500 rounded-2xl shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-red-600 text-white rounded-xl shadow-md">
                  <ShieldAlert className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase bg-red-600 text-white tracking-wider">
                    Cảnh báo an toàn khẩn cấp
                  </span>
                  <h3 className="text-lg font-bold text-red-900 mt-0.5">
                    Phát hiện dấu hiệu đe dọa, tống tiền hoặc ép buộc nguy hiểm!
                  </h3>
                </div>
              </div>

              <div className="text-sm text-red-800 bg-white/80 p-4 rounded-xl border border-red-200 leading-relaxed">
                {result.emergencyNotice ||
                  'Đoạn hội thoại có chứa dấu hiệu uy hiếp nghiêm trọng (đe dọa phát tán bí mật, hình ảnh riêng tư, tống tiền hoặc vũ lực). Bạn cần ưu tiên bảo vệ bản thân ngay lập tức!'}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onOpenEmergency}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm flex items-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Xem hướng dẫn xử lý khẩn cấp & Hotline 111
                </button>
                <span className="text-xs font-semibold text-red-700">
                  Tổng đài Quốc gia 111 (Miễn phí 24/7)
                </span>
              </div>
            </div>
          )}

          {/* Section 1: Overview Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                Tóm tắt tổng quan bối cảnh giao tiếp
              </h3>
              <button
                type="button"
                onClick={handleCopySummary}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 hover:bg-slate-100 px-2.5 py-1 rounded-lg transition-colors"
                title="Sao chép toàn bộ tóm tắt"
              >
                {summaryCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Đã chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép kết quả</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {result.overview}
            </p>
          </div>

          {/* Section 2: 6 Behavior Categories Breakdown */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Nhận diện 6 nhóm hành vi thao túng & gây áp lực
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Đánh giá mức độ xuất hiện của từng nhóm hành vi trong ngữ cảnh tin nhắn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {result.categories.map((cat) => {
                const isDetected = cat.detected;
                const levelColors: Record<string, { bg: string; text: string; badge: string; border: string }> = {
                  high: {
                    bg: 'bg-red-50/70',
                    border: 'border-red-200',
                    text: 'text-red-900',
                    badge: 'bg-red-100 text-red-700 border-red-300',
                  },
                  medium: {
                    bg: 'bg-amber-50/70',
                    border: 'border-amber-200',
                    text: 'text-amber-900',
                    badge: 'bg-amber-100 text-amber-700 border-amber-300',
                  },
                  low: {
                    bg: 'bg-blue-50/60',
                    border: 'border-blue-200',
                    text: 'text-blue-900',
                    badge: 'bg-blue-100 text-blue-700 border-blue-300',
                  },
                  none: {
                    bg: 'bg-slate-50/60',
                    border: 'border-slate-200',
                    text: 'text-slate-600',
                    badge: 'bg-slate-100 text-slate-500 border-slate-200',
                  },
                };

                const style = levelColors[cat.level] || levelColors.none;

                return (
                  <div
                    key={cat.categoryId}
                    className={`p-4 rounded-xl border transition-all ${style.bg} ${style.border}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {isDetected ? (
                          <AlertTriangle className={`w-4 h-4 shrink-0 ${cat.level === 'high' ? 'text-red-600' : 'text-amber-600'}`} />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                        )}
                        <h4 className="font-bold text-sm text-slate-900">{cat.categoryName}</h4>
                      </div>

                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${style.badge}`}>
                        {isDetected
                          ? cat.level === 'high'
                            ? 'Cảnh báo cao'
                            : cat.level === 'medium'
                            ? 'Cần lưu ý'
                            : 'Dấu hiệu nhẹ'
                          : 'Không phát hiện'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed pl-6">
                      {cat.explanation}
                    </p>

                    {onExploreCategory && isDetected && (
                      <div className="mt-2 pl-6">
                        <button
                          type="button"
                          onClick={() => onExploreCategory(cat.categoryId)}
                          className="text-[11px] font-semibold text-teal-700 hover:text-teal-900 hover:underline inline-flex items-center gap-0.5"
                        >
                          Tìm hiểu cẩm nang về nhóm này
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Noteworthy Quotes & Explanations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Quote className="w-5 h-5 text-teal-600" />
                Trích dẫn câu nói đáng chú ý & Phân tích lý do cảnh giác
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Các câu nói cụ thể trong tin nhắn và cơ chế tâm lý ẩn sau đó
              </p>
            </div>

            {result.noteworthyQuotes && result.noteworthyQuotes.length > 0 ? (
              <div className="space-y-3.5">
                {result.noteworthyQuotes.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/90 border border-slate-200 hover:border-slate-300 transition-colors space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {q.categoryName}
                        </span>
                      </div>
                    </div>

                    {/* Quote text */}
                    <div className="p-3 bg-white rounded-lg border-l-4 border-amber-400 border-t border-r border-b border-slate-100 text-slate-800 text-xs sm:text-sm italic font-medium">
                      “{q.quote}”
                    </div>

                    {/* Reason / Psychological explanation */}
                    <div className="text-xs text-slate-700 leading-relaxed bg-amber-50/50 p-3 rounded-lg border border-amber-100/80">
                      <strong className="text-amber-900 block mb-1">
                        💡 Vì sao câu nói này là dấu hiệu đáng cảnh giác?
                      </strong>
                      {q.reason}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs">
                Không tìm thấy câu nói nào có dấu hiệu gây áp lực hay thao túng đáng báo động trong đoạn hội thoại này.
              </div>
            )}
          </div>

          {/* Section 4: Safe Response Guidance & Suggested Reply Scripts */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Hướng dẫn ứng phó an toàn & Kịch bản phản hồi mẫu
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Gợi ý cách bạn có thể trả lời một cách bình tĩnh, lịch sự nhưng kiên quyết bảo vệ ranh giới
              </p>
            </div>

            {/* Strategic Advice */}
            <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl text-xs sm:text-sm text-teal-950 leading-relaxed">
              <strong className="text-teal-900 block mb-1">Định hướng tâm lý:</strong>
              {result.safeGuidance}
            </div>

            {/* Suggested Replies */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Các mẫu câu phản hồi bạn có thể tham khảo:
              </label>

              {result.suggestedReplies && result.suggestedReplies.map((reply, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      Cách {index + 1}: {reply.style}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyReply(reply.replyText, index)}
                      className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 border border-slate-200 rounded-lg transition-colors flex items-center gap-1"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép tin nhắn</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed select-all">
                    {reply.replyText}
                  </div>

                  {reply.note && (
                    <div className="text-[11px] text-slate-500 italic">
                      * {reply.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Steps Checklist */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Các bước hành động an toàn khuyến nghị cho bạn:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {result.actionSteps && result.actionSteps.map((step, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5: Educational Disclaimer */}
          <div className="text-center p-4 bg-slate-100 rounded-xl text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {result.disclaimer}
          </div>
        </div>
      )}
    </div>
  );
};
