import React from 'react';
import { AlertOctagon, PhoneCall, ShieldAlert, CheckCircle2, X, ExternalLink, LifeBuoy } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-red-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
              <ShieldAlert className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Hỗ trợ khẩn cấp & Bảo vệ an toàn</h3>
              <p className="text-xs text-red-100">Dành cho tình huống bị đe dọa, tống tiền hoặc ép buộc nguy hiểm</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* Urgent Hotline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-red-200 text-red-800 rounded mb-1">
                  Quan trọng nhất
                </span>
                <h4 className="font-bold text-slate-900 text-base">Tổng đài Quốc gia Bảo vệ Trẻ em</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Tư vấn, bảo vệ học sinh dưới 18 tuổi bị bạo lực, bắt nạt mạng, xâm hại.
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-2xl font-black text-red-600">111</span>
                <span className="text-xs font-medium text-red-700 bg-red-100 px-2.5 py-1 rounded-full">
                  Miễn phí 24/7
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-blue-200 text-blue-800 rounded mb-1">
                  Tâm lý học đường
                </span>
                <h4 className="font-bold text-slate-900 text-base">Đường dây nóng Ngày Mai</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Hỗ trợ tâm lý người trẻ đối diện với khủng hoảng, lo âu, cảm giác tuyệt vọng.
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-700">096 306 1414</span>
                <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                  13h00 - 20h30
                </span>
              </div>
            </div>
          </div>

          {/* 4 Golden Steps when Threatened / Sextorted */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-3">
              <AlertOctagon className="w-4 h-4 text-amber-600" />
              4 NGUYÊN TẮC VÀNG KHI BỊ ĐE DỌA, TỐNG TIỀN HOẶC ÉP GỬI ẢNH NHẠY CẢM:
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
                  1
                </span>
                <div>
                  <strong className="text-slate-900">TUYỆT ĐỐI KHÔNG làm theo yêu sách:</strong> Không chuyển bất kỳ số tiền nào, không gửi thêm bất kỳ hình ảnh nào. Kẻ tống tiền sẽ không dừng lại mà chỉ tiếp tục đòi hỏi nhiều hơn.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
                  2
                </span>
                <div>
                  <strong className="text-slate-900">LƯU TRỮ TOÀN BỘ CHỨNG CỨ:</strong> Chụp màn hình tất cả tin nhắn đe dọa, tên tài khoản, link trang cá nhân, số điện thoại, số tài khoản đòi tiền. Không xóa cuộc trò chuyện.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
                  3
                </span>
                <div>
                  <strong className="text-slate-900">BẠN LÀ NẠN NHÂN, BẠN KHÔNG CÓ LỖI:</strong> Kẻ có lỗi và vi phạm pháp luật là kẻ đe dọa bạn. Đừng để cảm giác sợ hãi hay xấu hổ ngăn bạn tìm kiếm sự giúp đỡ.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
                  4
                </span>
                <div>
                  <strong className="text-slate-900">CHIA SẺ NGAY VỚI NGƯỜI LỚN TIN CẬY:</strong> Hãy dũng cảm tâm sự với cha mẹ, thầy cô chủ nhiệm, cán bộ tâm lý học đường, hoặc gọi Tổng đài 111 để được can thiệp pháp lý an toàn.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-800 flex items-center gap-2">
            <LifeBuoy className="w-4 h-4 text-teal-600 shrink-0" />
            <span>MINDGUARD là hệ thống hỗ trợ giáo dục và tư vấn tâm lý ban đầu, không thay thế cơ quan bảo vệ pháp luật. Trong trường hợp nguy hiểm thể chất tức thì, hãy gọi ngay <strong>113</strong>.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Tôi đã hiểu & đóng
          </button>
        </div>
      </div>
    </div>
  );
};
