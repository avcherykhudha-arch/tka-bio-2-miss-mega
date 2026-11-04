import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Square, RotateCcw, Sliders, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { useTTS } from '../hooks/useTTS.ts';

interface AudioPlayerBarProps {
  tts: ReturnType<typeof useTTS>;
  onOpenSettings?: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ tts, onOpenSettings }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const {
    isPlaying,
    isPaused,
    currentNarrativeType,
    currentText,
    pause,
    resume,
    stop,
    replay,
    settings,
    updateRate,
    updateVolume,
    selectedVoice,
  } = tts;

  const getLayerLabel = (type: string | null) => {
    switch (type) {
      case 'welcome':
        return 'Sambutan Ruang Belajar Miss Mega';
      case 'instruction':
        return 'Petunjuk Pengerjaan & Fitur Aplikasi';
      case 'stimulusIntro':
        return 'Lapis 1: Pengantar Pengamatan Gambar';
      case 'questionGuide':
        return 'Lapis 2: Panduan Memahami Soal & Kata Kunci';
      case 'discussionVoice':
        return 'Lapis 3: Pembahasan Ilmiah Menyeluruh';
      case 'quickTrickVoice':
        return 'Lapis 4: Trik Cepat Nalar Miss Mega';
      case 'evaluation':
        return 'Evaluasi Hasil Belajar & Motivasi';
      default:
        return 'Narasi Pembimbing Miss Mega';
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-rose-200/80 shadow-[0_-4px_20px_rgba(244,63,94,0.08)] transition-all duration-300">
      {/* Transcript Drawer */}
      {showTranscript && currentText && (
        <div className="max-w-4xl mx-auto px-4 py-3 bg-rose-50/90 border-b border-rose-200 text-xs md:text-sm text-slate-700 leading-relaxed max-h-36 overflow-y-auto animate-fade-in">
          <div className="flex items-center justify-between mb-1.5 font-bold text-rose-800">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              Naskah Suara Miss Mega
            </span>
            <button
              onClick={() => setShowTranscript(false)}
              className="text-slate-400 hover:text-slate-600 text-xs font-normal"
            >
              Tutup
            </button>
          </div>
          <p className="italic">"{currentText}"</p>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: Speaker Identity & Status */}
        <div className="flex items-center gap-2.5 min-w-[200px]">
          <div className="relative">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-rose-400 via-pink-400 to-purple-400 p-0.5 shadow-sm">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                <span className="font-heading font-extrabold text-sm sm:text-base text-rose-600">MM</span>
              </div>
            </div>
            {isPlaying && !isPaused && (
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading">Miss Mega</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                Guru Biologi
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-rose-700 font-medium truncate max-w-[200px] sm:max-w-xs">
              {isPlaying
                ? isPaused
                  ? 'Narasi dijeda...'
                  : getLayerLabel(currentNarrativeType)
                : 'Siap membimbing belajarmu'}
            </p>
          </div>
        </div>

        {/* Center: Controls (Play, Pause, Stop, Replay) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {isPlaying && !isPaused ? (
            <button
              onClick={pause}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
              title="Jeda Narator"
            >
              <Pause className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Jeda</span>
            </button>
          ) : (
            <button
              onClick={() => (isPaused ? resume() : replay())}
              disabled={!currentText && !isPaused}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs transition cursor-pointer ${
                !currentText && !isPaused
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-rose-500 hover:bg-rose-600 text-white'
              }`}
              title="Lanjutkan / Ulangi Narasi"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">{isPaused ? 'Lanjutkan' : 'Bicara'}</span>
            </button>
          )}

          <button
            onClick={stop}
            disabled={!isPlaying && !isPaused}
            className={`p-1.5 rounded-full text-slate-600 hover:bg-rose-100 hover:text-rose-700 transition cursor-pointer ${
              !isPlaying && !isPaused ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            title="Hentikan Narasi"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
          </button>

          <button
            onClick={replay}
            disabled={!currentText}
            className={`p-1.5 rounded-full text-slate-600 hover:bg-rose-100 hover:text-rose-700 transition cursor-pointer ${
              !currentText ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            title="Ulangi dari Awal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {currentText && (
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-medium transition cursor-pointer"
            >
              {showTranscript ? 'Tutup Teks' : 'Lihat Teks'}
            </button>
          )}
        </div>

        {/* Right: Quick Speed & Settings */}
        <div className="flex items-center gap-2">
          {/* Quick Speed Switcher */}
          <div className="hidden md:flex items-center gap-1 text-xs text-slate-600">
            <span className="text-[11px] text-slate-400">Kecepatan:</span>
            {[0.85, 0.95, 1.1].map((r) => (
              <button
                key={r}
                onClick={() => updateRate(r)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition cursor-pointer ${
                  Math.abs(settings.rate - r) < 0.05
                    ? 'bg-rose-500 text-white'
                    : 'bg-rose-50 text-slate-600 hover:bg-rose-100'
                }`}
              >
                {r}x
              </button>
            ))}
          </div>

          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-rose-200 bg-rose-50/50 hover:bg-rose-100 text-rose-800 text-xs font-semibold transition cursor-pointer"
              title="Pengaturan Suara & Suara TTS"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Atur Suara</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
