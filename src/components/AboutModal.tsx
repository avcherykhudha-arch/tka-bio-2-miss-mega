import React from 'react';
import { X, Sparkles, GraduationCap, Heart, CheckCircle2, Shield, Laptop } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
      <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-rose-100 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base">Tentang Aplikasi &amp; Miss Mega</h3>
              <p className="text-[11px] text-rose-100">TKA Biologi 2026 – Belajar Cerdas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-2">
            <div className="flex items-center gap-2 font-heading font-bold text-rose-800 text-sm">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Sosok Pengajar: MISS MEGA</span>
            </div>
            <p>
              Miss Mega adalah representasi seorang pendidik Biologi perempuan yang ramah, komunikatif, sabar, dan berintelektual tinggi. Visi Miss Mega adalah membebaskan siswa dari belenggu hafalan tanpa makna, membimbing mereka mengapresiasi kompleksitas proses kehidupan, dan menumbuhkan daya nalar ilmiah murni.
            </p>
            <p className="italic text-rose-700 font-medium">
              "Kenali Kehidupan, Pahami Prosesnya, Taklukkan TKA!"
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
              Karakteristik &amp; Keaslian Konten:
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Tepat 30 Soal HOTS:</strong> Terbagi rata 10 Pilihan Ganda (PG), 10 Pilihan Ganda Kompleks (PGK), dan 10 Benar-Salah (BS).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Stimulus Visual Ilmiah Autentik:</strong> Setiap butir soal dilengkapi grafik/diagram berbasis vektor resolusi tinggi tanpa kebocoran kunci jawaban.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>4 Lapis Bimbingan Suara:</strong> Pengantar pengamatan stimulus, panduan kata kunci, pembahasan mendalam, dan trik penalaran cepat.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Penyimpanan Otomatis &amp; Siap Offline:</strong> Berjalan mandiri via Service Worker dan Progressive Web App (PWA).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Ramah Interactive Flat Panel (IFP):</strong> Tipografi jelas dan kontras warna yang nyaman digunakan di layar sentuh kelas modern.</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
            Disusun untuk persiapan Tes Kemampuan Akademik (TKA) jenjang SMA/MA/sederajat berdasarkan standar kompetensi sains Kemendikdasmen 2026.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
