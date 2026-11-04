import React from 'react';
import { X, Volume2, Gauge, Mic, Sparkles, AlertTriangle, RotateCcw } from 'lucide-react';
import { useTTS } from '../hooks/useTTS.ts';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tts: ReturnType<typeof useTTS>;
  resetDialogOpen: boolean;
  onCloseResetDialog: () => void;
  onConfirmReset: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  tts,
  resetDialogOpen,
  onCloseResetDialog,
  onConfirmReset,
}) => {
  const {
    voices,
    selectedVoice,
    settings,
    updateRate,
    updateVolume,
    updateVoice,
    speak,
  } = tts;

  const handleTestVoice = () => {
    speak(
      'Halo! Ini adalah contoh suara Miss Mega. Kenali kehidupan, pahami prosesnya, taklukkan TKA Biologi 2026 bersama saya!',
      'test'
    );
  };

  return (
    <>
      {/* Settings Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-rose-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base">Pengaturan Suara Miss Mega</h3>
                  <p className="text-[11px] text-rose-100">Web Speech API Text-to-Speech (TTS)</p>
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
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              {/* Voice Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pilihan Karakter Suara
                </label>
                <select
                  value={selectedVoice?.voiceURI || ''}
                  onChange={(e) => updateVoice(e.target.value)}
                  className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-rose-400 focus:outline-hidden text-slate-800 transition"
                >
                  {voices.length === 0 && (
                    <option value="">Memuat daftar suara sistem...</option>
                  )}
                  {voices.map((v) => {
                    const isIndo = v.lang.toLowerCase().includes('id');
                    return (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {isIndo ? '⭐ [Indonesia] ' : ''} {v.name} ({v.lang})
                      </option>
                    );
                  })}
                </select>
                <p className="mt-1 text-[11px] text-slate-500">
                  Direkomendasikan memilih suara bahasa Indonesia (id-ID) untuk pelafalan ilmiah Biologi yang optimal.
                </p>
              </div>

              {/* Speed Slider */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-rose-500" />
                    Kecepatan Bicara
                  </label>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                    {settings.rate.toFixed(2)}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.75"
                  max="1.3"
                  step="0.05"
                  value={settings.rate}
                  onChange={(e) => updateRate(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                  <span>Tenang (0.75x)</span>
                  <span>Standar Miss Mega (0.95x)</span>
                  <span>Cepat (1.30x)</span>
                </div>
              </div>

              {/* Volume Slider */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-rose-500" />
                    Volume Suara
                  </label>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                    {Math.round(settings.volume * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={settings.volume}
                  onChange={(e) => updateVolume(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
              </div>

              {/* Test Button */}
              <div className="pt-2">
                <button
                  onClick={handleTestVoice}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 shadow-md shadow-rose-500/20 transition cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-rose-200" />
                  <span>Uji Coba Suara Miss Mega</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
              >
                Tutup Pengaturan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Progress Confirmation Dialog */}
      {resetDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-rose-100 p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 mx-auto flex items-center justify-center mb-4">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h3 className="font-heading font-extrabold text-lg text-slate-900 mb-2">
              Mulai Ulang Semua Progress?
            </h3>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
              Tindakan ini akan <strong>menghapus seluruh jawaban</strong> dari 30 soal, riwayat pemeriksaan pembahasan, dan skor hasil latihan. Aplikasi akan kembali bersih seperti baru dibuka.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onCloseResetDialog}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs md:text-sm transition cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={onConfirmReset}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs md:text-sm shadow-md shadow-rose-600/20 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ya, Reset Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
