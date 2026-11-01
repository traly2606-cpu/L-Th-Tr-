import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Lightbulb
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizData';

export const KnowledgeQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null) return;
    setIsAnswerSubmitted(true);
    const chosen = currentQ.options[selectedOptionIndex];
    if (chosen.isOptimal) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const getRankBadge = () => {
    const total = QUIZ_QUESTIONS.length;
    const ratio = score / total;
    if (ratio >= 0.85) {
      return {
        title: 'Hiệp sĩ An toàn Không gian mạng',
        color: 'from-amber-500 to-amber-700 text-amber-50',
        desc: 'Xuất sắc! Bạn có khả năng nhận diện ranh giới và phản xạ ứng phó với thao túng tâm lý mạng cực kỳ vững vàng.',
      };
    } else if (ratio >= 0.6) {
      return {
        title: 'Chuyên gia Nhận diện Ranh giới Số',
        color: 'from-teal-600 to-cyan-700 text-teal-50',
        desc: 'Rất tốt! Bạn nắm rõ hầu hết các thủ thuật thao túng phổ biến và biết cách bảo vệ bản thân an toàn.',
      };
    } else if (ratio >= 0.4) {
      return {
        title: 'Thám tử Tâm lý Học đường',
        color: 'from-blue-600 to-blue-800 text-blue-50',
        desc: 'Khá tốt! Bạn đã nhận ra nhiều dấu hiệu cảnh báo, hãy rèn luyện thêm ở mục Thư viện để tự tin hơn.',
      };
    } else {
      return {
        title: 'Tập sự Bản lĩnh Mạng',
        color: 'from-slate-600 to-slate-800 text-slate-50',
        desc: 'Bạn đang bắt đầu học cách bảo vệ bản thân. Hãy đọc kỹ các mục trong Thư viện nhận diện nhé!',
      };
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          <span>Trắc nghiệm tình huống thực tế THPT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Kiểm tra kiến thức nhận diện thao túng mạng
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Thử sức với 8 tình huống giao tiếp học đường điển hình để kiểm tra khả năng phát hiện "red flags" và bảo vệ sức khỏe tâm lý của bạn.
        </p>
      </div>

      {!quizFinished ? (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Progress Header */}
          <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Câu hỏi {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-teal-100 text-teal-800">
                {currentQ.contextTag}
              </span>
            </div>

            <div className="text-xs font-bold text-slate-600">
              Điểm hiện tại: <span className="text-blue-600 text-sm font-extrabold">{score}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5">
            <div
              className="bg-gradient-to-r from-blue-600 to-teal-500 h-1.5 transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Scenario Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/80 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Tình huống giả định:
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed italic">
                “{currentQ.scenario}”
              </p>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOptionIndex === idx;
                let optionStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';

                if (isAnswerSubmitted) {
                  if (opt.isOptimal) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200 text-emerald-950';
                  } else if (isSelected && !opt.isOptimal) {
                    optionStyle = 'bg-rose-50 border-rose-500 ring-2 ring-rose-200 text-rose-950';
                  } else {
                    optionStyle = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-blue-50 border-blue-500 ring-2 ring-blue-200 text-blue-900';
                }

                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${optionStyle}`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isAnswerSubmitted ? (
                        opt.isOptimal ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-slate-300" />
                        )
                      ) : (
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${
                            isSelected
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-300 text-slate-500'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="text-xs sm:text-sm font-medium leading-relaxed">
                        {opt.text}
                      </div>

                      {isAnswerSubmitted && isSelected && (
                        <div
                          className={`text-xs mt-1.5 font-semibold ${
                            opt.isOptimal ? 'text-emerald-700' : 'text-rose-700'
                          }`}
                        >
                          {opt.feedback}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Psychological Insight Box after answer */}
            {isAnswerSubmitted && (
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs sm:text-sm space-y-1 animate-in fade-in duration-200">
                <div className="font-bold flex items-center gap-1.5 text-teal-900">
                  <Lightbulb className="w-4 h-4 text-teal-600" />
                  Góc nhìn tâm lý học đường:
                </div>
                <p className="leading-relaxed text-slate-700">
                  {currentQ.psychologicalInsight}
                </p>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitAnswer}
                  disabled={selectedOptionIndex === null}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                >
                  Xác nhận câu trả lời
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>
                    {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả tổng kết'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Final Quiz Results Screen */
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 text-center space-y-6 max-w-2xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Tổng kết bài trắc nghiệm
            </span>
            <h3 className="text-3xl font-black text-slate-900">
              {score} / {QUIZ_QUESTIONS.length} Điểm
            </h3>
          </div>

          {/* Badge Display */}
          <div className={`p-6 rounded-2xl bg-gradient-to-r ${getRankBadge().color} space-y-2 text-white shadow-md`}>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
              Danh hiệu đạt được
            </span>
            <h4 className="text-xl font-extrabold">{getRankBadge().title}</h4>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg mx-auto">
              {getRankBadge().desc}
            </p>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            * Kết quả này chỉ mang tính chất giáo dục nâng cao nhận thức kỹ năng sống số cho học sinh, không phải là chẩn đoán tâm lý.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestartQuiz}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại bài trắc nghiệm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
