import React from 'react';
import { ShieldCheck, Heart, Lock, PhoneCall, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenEmergency: () => void;
  onNavigateTab: (tab: 'analyzer' | 'library' | 'assistant' | 'quiz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEmergency, onNavigateTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                MINDGUARD
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded border border-teal-700/50">
                THPT Việt Nam
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Hệ thống trợ lý giáo dục an toàn tâm lý số dành cho học sinh THPT Việt Nam. Hỗ trợ nhận diện các mẫu giao tiếp có nguy cơ thao túng, bảo vệ ranh giới cá nhân và cung cấp hướng dẫn ứng phó văn minh, an toàn.
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-400 pt-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Cam kết không lưu trữ bất kỳ nội dung tin nhắn hay thông tin cá nhân nào.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Chuyên mục chính
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateTab('analyzer')}
                  className="hover:text-white transition-colors"
                >
                  Phân tích hội thoại (AI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('library')}
                  className="hover:text-white transition-colors"
                >
                  Thư viện nhận diện 6 nhóm hành vi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('assistant')}
                  className="hover:text-white transition-colors"
                >
                  Trợ lý ứng phó & Kịch bản mẫu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('quiz')}
                  className="hover:text-white transition-colors"
                >
                  Kiểm tra kiến thức tình huống
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Đường dây nóng hỗ trợ
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <div className="text-red-400 font-bold text-sm">111 (Tổng đài Trẻ em)</div>
                <div className="text-[11px] text-slate-400">Tư vấn, bảo vệ trẻ em 24/7 (Miễn phí)</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                <div className="text-blue-400 font-bold text-sm">096 306 1414</div>
                <div className="text-[11px] text-slate-400">Đường dây nóng Ngày Mai (Hỗ trợ tâm lý)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Educational Disclaimer */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            <strong>Miễn trừ trách nhiệm giáo dục:</strong> MINDGUARD là công cụ giáo dục hỗ trợ nâng cao nhận thức kỹ năng số và tư vấn kỹ năng giao tiếp ban đầu. Ứng dụng không đưa ra kết luận chẩn đoán y khoa, không thay thế cho các nhà tâm lý lâm sàng chuyên nghiệp và không phải là cơ quan điều tra pháp lý. Trong mọi trường hợp có dấu hiệu đe dọa thể chất, tống tiền hoặc xâm phạm an toàn, hãy liên hệ ngay với người lớn trong gia đình, nhà trường và cơ quan công an có thẩm quyền.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-slate-400">
            <div>
              © 2026 MINDGUARD Việt Nam. Xây dựng vì một không gian mạng học đường an toàn, tôn trọng và văn minh.
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span>Được xây dựng với sự thấu cảm dành cho học sinh THPT</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
