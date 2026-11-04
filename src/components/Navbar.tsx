import React, { useState } from 'react';
import { 
  BookOpen, 
  Home, 
  HelpCircle, 
  Layers, 
  BarChart3, 
  RotateCcw, 
  Sliders, 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton.tsx';

export type PageId = 'home' | 'instructions' | 'quiz' | 'topics' | 'results';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSettings: () => void;
  onResetProgress: () => void;
  answeredCount: number;
  totalQuestions: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSettings,
  onResetProgress,
  answeredCount,
  totalQuestions,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Beranda', icon: <Home className="w-4 h-4" /> },
    { id: 'instructions', label: 'Petunjuk Belajar', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'quiz', label: 'Mulai Latihan', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'topics', label: 'Daftar Materi', icon: <Layers className="w-4 h-4" /> },
    { id: 'results', label: 'Hasil Belajar', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      {/* Top Banner: Slogan and Auto-save status */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white text-[11px] sm:text-xs py-1 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse text-rose-200" />
            <span className="font-semibold tracking-wide">
              "Kenali Kehidupan, Pahami Prosesnya, Taklukkan TKA!"
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-white font-medium text-[10px]">
              <CheckCircle2 className="w-3 h-3 text-emerald-300" />
              <span className="hidden sm:inline">PROGRESS TERSIMPAN OTOMATIS</span>
              <span className="sm:hidden">TERSANGKUT</span>
            </span>
            <span className="text-[11px] opacity-90 hidden md:inline">
              {answeredCount}/{totalQuestions} Soal
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-left group transition cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-0.5 shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-rose-600" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                TKA BIOLOGI <span className="text-rose-600">2026</span>
              </span>
            </div>
            <p className="text-[11px] text-rose-600 font-semibold tracking-wide flex items-center gap-1">
              <span>BERSAMA MISS MEGA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span className="text-slate-500 font-normal">SMA / MA</span>
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-rose-50/60 p-1 rounded-2xl border border-rose-100/80">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-rose-700 hover:bg-white/80'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <PWAInstallButton />

          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 transition cursor-pointer"
            title="Pengaturan Suara"
          >
            <Sliders className="w-4 h-4" />
          </button>

          <button
            onClick={onResetProgress}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition cursor-pointer"
            title="Mulai Ulang Semua Latihan"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-rose-50 lg:hidden cursor-pointer"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-rose-100 bg-white/98 backdrop-blur-md px-4 py-3 space-y-1.5 shadow-lg animate-fade-in">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-rose-500 text-white'
                    : 'text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-rose-100 flex items-center justify-between">
            <button
              onClick={() => {
                onResetProgress();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 px-3 py-2 rounded-lg hover:bg-rose-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Semua Progress</span>
            </button>
            <span className="text-xs text-slate-500">
              {answeredCount}/{totalQuestions} Soal Selesai
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
