import React, { useState } from 'react';
import {
  BookOpen,
  HeartHandshake,
  AlertCircle,
  Lock,
  ShieldAlert,
  UserCheck,
  EyeOff,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Shield,
  MessageSquare
} from 'lucide-react';
import { LIBRARY_CATEGORIES } from '../data/libraryData';

interface BehaviorLibraryProps {
  initialCategoryId?: string | null;
  onSelectForAnalysis?: (text: string) => void;
}

export const BehaviorLibrary: React.FC<BehaviorLibraryProps> = ({
  initialCategoryId,
  onSelectForAnalysis,
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    initialCategoryId || LIBRARY_CATEGORIES[0].id
  );

  const activeCategory =
    LIBRARY_CATEGORIES.find((c) => c.id === selectedId) || LIBRARY_CATEGORIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5" />;
      case 'Lock':
        return <Lock className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'EyeOff':
        return <EyeOff className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>Cẩm nang kiến thức an toàn số</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Thư viện nhận diện 6 nhóm hành vi thao túng tâm lý
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Trang bị kiến thức khoa học tâm lý học đường để phân biệt giữa sự quan tâm lành mạnh và những áp lực vô hình trên không gian mạng.
        </p>
      </div>

      {/* Categories Horizontal Tabs / Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {LIBRARY_CATEGORIES.map((cat) => {
          const isSelected = cat.id === selectedId;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedId(cat.id)}
              className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-blue-50 to-teal-50 border-teal-500 shadow-md ring-2 ring-teal-200'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                  isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {getIcon(cat.iconName)}
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-slate-500 line-clamp-1">
                  {cat.shortTag}
                </span>
                <span className="block text-xs font-bold text-slate-900 line-clamp-1">
                  {cat.name.split('(')[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Selected Category Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden space-y-6">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-teal-700 to-cyan-700 text-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white mb-1">
                {activeCategory.shortTag}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {activeCategory.name}
              </h3>
            </div>
          </div>
          <p className="text-sm text-blue-50 mt-3 leading-relaxed max-w-3xl">
            {activeCategory.description}
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Psychological Mechanics */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              Cơ chế tâm lý đằng sau hành vi này:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeCategory.psychologicalMechanics}
            </p>
          </div>

          {/* Red Flags Warning List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              Các câu nói hoặc dấu hiệu cảnh báo đặc trưng (Red Flags):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeCategory.redFlags.map((flag, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-red-50/60 border border-red-100 text-xs sm:text-sm text-red-950 flex items-start gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <span className="italic font-medium">{flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Healthy vs Manipulative Contrast Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              Phân biệt giữa Quan tâm lành mạnh và Thao túng tâm lý:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Giao tiếp lành mạnh & Tôn trọng
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                  {activeCategory.healthyVsManipulative.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item.healthy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-xs sm:text-sm">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  Dấu hiệu thao túng & Gây áp lực
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-rose-950">
                  {activeCategory.healthyVsManipulative.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{item.manipulative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Real-world High School Chat Scenario */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-teal-600" />
                Tình huống thực tế học đường ({activeCategory.realWorldScenario.context}):
              </h4>
            </div>

            {/* Simulated Chat Interface */}
            <div className="bg-slate-100 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3 max-w-xl">
              <div className="text-[11px] text-center text-slate-400 font-semibold mb-2">
                Tin nhắn trực tuyến mô phỏng
              </div>
              <div className="space-y-2.5">
                {activeCategory.realWorldScenario.dialogue.map((msg, index) => {
                  const isYou = msg.sender === 'Bạn';
                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${isYou ? 'items-end' : 'items-start'}`}
                    >
                      <span className="text-[10px] text-slate-500 font-semibold mb-0.5 px-1">
                        {msg.sender}
                      </span>
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm ${
                          isYou
                            ? 'bg-blue-600 text-white rounded-tr-xs'
                            : msg.isCaution
                            ? 'bg-rose-100 text-rose-900 border border-rose-300 rounded-tl-xs font-medium'
                            : 'bg-white text-slate-800 shadow-xs border border-slate-200 rounded-tl-xs'
                        }`}
                      >
                        {msg.text}
                        {msg.isCaution && (
                          <span className="block text-[10px] text-rose-700 font-bold mt-1 uppercase tracking-wide">
                            ⚠️ Dấu hiệu gây áp lực
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-xs text-slate-600 border-t border-slate-200/80 leading-relaxed italic">
                <strong>Phân tích tình huống:</strong> {activeCategory.realWorldScenario.analysis}
              </div>
            </div>
          </div>

          {/* Safe Boundaries Guidelines */}
          <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-3">
            <h4 className="text-sm font-bold text-teal-950 flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-700" />
              Cách bạn thiết lập ranh giới an toàn:
            </h4>
            <div className="space-y-2">
              {activeCategory.safeBoundaries.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-teal-900">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
