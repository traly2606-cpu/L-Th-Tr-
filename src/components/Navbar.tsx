import React, { useState } from 'react';
import { ShieldCheck, MessageSquareCode, BookOpen, UserCheck, HelpCircle, PhoneCall, LogOut, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: 'analyzer' | 'library' | 'assistant' | 'quiz';
  setActiveTab: (tab: 'analyzer' | 'library' | 'assistant' | 'quiz') => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenEmergency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick escape button redirect to a safe educational site
  const handleQuickExit = () => {
    window.location.replace('https://vi.wikipedia.org/wiki/To%C3%A1n_h%E1%BB%8Dc');
  };

  const navItems = [
    {
      id: 'analyzer' as const,
      label: 'Phân tích hội thoại',
      icon: MessageSquareCode,
      badge: 'Gemini AI',
    },
    {
      id: 'library' as const,
      label: 'Thư viện nhận diện',
      icon: BookOpen,
      badge: '6 Nhóm',
    },
    {
      id: 'assistant' as const,
      label: 'Trợ lý ứng phó',
      icon: UserCheck,
      badge: 'Kịch bản mẫu',
    },
    {
      id: 'quiz' as const,
      label: 'Kiểm tra kiến thức',
      icon: HelpCircle,
      badge: 'Tình huống',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div
            onClick={() => setActiveTab('analyzer')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-teal-500 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-600 group-hover:text-teal-600 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  MINDGUARD
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 rounded">
                  THPT Việt Nam
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden md:block leading-none">
                Lá chắn an toàn tâm lý & ứng phó thao túng mạng
              </p>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 shadow-xs ring-1 ring-blue-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-blue-200/80 text-blue-800' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenEmergency}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors shadow-xs"
              title="Tổng đài Quốc gia 111 & Hỗ trợ nguy cấp"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600 animate-bounce" />
              <span>Cần trợ giúp (111)</span>
            </button>

            <button
              onClick={handleQuickExit}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              title="Rời khỏi trang ngay lập tức sang Wikipedia để bảo vệ sự riêng tư"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Lối thoát nhanh</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEmergency}
              className="p-2 text-red-600 bg-red-50 rounded-lg border border-red-200"
              title="Hỗ trợ khẩn cấp"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => {
                onOpenEmergency();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 px-3 bg-red-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4" />
              Tổng đài 111 (Khẩn cấp)
            </button>
            <button
              onClick={handleQuickExit}
              className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium flex items-center justify-center gap-1"
            >
              <LogOut className="w-4 h-4" />
              Thoát nhanh
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
