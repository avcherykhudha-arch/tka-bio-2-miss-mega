import React, { useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Volume2, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  TrendingDown,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Brain
} from 'lucide-react';
import { Question, UserProgress } from '../types/index.ts';
import { evaluateQuiz } from '../utils/scoring.ts';
import { useTTS } from '../hooks/useTTS.ts';
import { PageId } from '../components/Navbar.tsx';

interface ResultsPageProps {
  questions: Question[];
  progress: UserProgress;
  onNavigate: (page: PageId) => void;
  onGoToQuestion: (qId: number) => void;
  onResetProgress: () => void;
  tts: ReturnType<typeof useTTS>;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({
  questions,
  progress,
  onNavigate,
  onGoToQuestion,
  onResetProgress,
  tts,
}) => {
  const evalResult = evaluateQuiz(questions, progress.answers);

  // Trigger evaluation narration
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!tts.isPlaying && tts.settings.autoPlayIntro) {
        tts.speak(evalResult.encouragementVoice, 'evaluation');
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayVoice = () => {
    tts.speak(evalResult.encouragementVoice, 'evaluation');
  };

  const getTierColor = (score: number) => {
    if (score >= 90) return 'from-emerald-500 to-teal-600';
    if (score >= 80) return 'from-blue-500 to-indigo-600';
    if (score >= 70) return 'from-purple-500 to-pink-600';
    if (score >= 60) return 'from-amber-500 to-orange-600';
    return 'from-rose-500 to-red-600';
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-28 animate-fade-in">
      {/* Top Banner Card */}
      <div className={`rounded-3xl bg-gradient-to-r ${getTierColor(evalResult.scorePercentage)} p-6 sm:p-10 text-white shadow-xl space-y-4`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
              <Award className="w-4 h-4 text-yellow-200" />
              <span>RAPOR HASIL BELAJAR TKA BIOLOGI 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Evaluasi Penguasaan Konsep Biologi
            </h1>
            <p className="text-white/90 text-xs sm:text-sm max-w-xl">
              Pembimbing: <strong>Miss Mega</strong> • Slogan: "Kenali Kehidupan, Pahami Prosesnya, Taklukkan TKA!"
            </p>
          </div>

          <button
            onClick={handlePlayVoice}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-rose-50 text-slate-800 font-heading font-bold text-xs sm:text-sm shadow-md transition shrink-0 cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-rose-600" />
            <span>Dengarkan Evaluasi Miss Mega</span>
          </button>
        </div>

        {/* Score & Tier Badge */}
        <div className="pt-4 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-xs">
            <p className="text-xs text-white/80 font-medium">Persentase Nilai</p>
            <p className="text-3xl sm:text-4xl font-extrabold font-heading mt-1">
              {evalResult.scorePercentage}%
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-xs">
            <p className="text-xs text-white/80 font-medium">Predikat Penguasaan</p>
            <p className="text-base sm:text-lg font-bold font-heading mt-1 truncate">
              {evalResult.masteryLevel}
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-xs">
            <p className="text-xs text-white/80 font-medium">Jawaban Benar</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-heading mt-1 text-emerald-200">
              {evalResult.correctCount} <span className="text-xs font-normal text-white">/ {evalResult.totalQuestions} Soal</span>
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-xs">
            <p className="text-xs text-white/80 font-medium">Belum Dijawab</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-heading mt-1 text-yellow-200">
              {evalResult.unansweredCount} <span className="text-xs font-normal text-white">Soal</span>
            </p>
          </div>
        </div>
      </div>

      {/* Encouragement Speech Card */}
      <div className="rounded-3xl bg-white border border-rose-100 p-6 sm:p-8 shadow-xs flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="space-y-1.5 flex-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
            PESAN DAN EVALUASI MISS MEGA
          </span>
          <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed italic">
            "{evalResult.encouragementVoice}"
          </p>
          <p className="text-xs text-slate-500 pt-1">
            {evalResult.masteryDescription}
          </p>
        </div>
      </div>

      {/* Category Mastery Breakdown Bars */}
      <div className="rounded-3xl bg-white border border-rose-100 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 flex items-center gap-2">
            <Brain className="w-5 h-5 text-rose-500" />
            Penguasaan Berdasarkan 5 Kategori Kurikulum
          </h2>
        </div>

        <div className="space-y-4">
          {Object.values(evalResult.categoryScores).map((cat) => (
            <div key={cat.category} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-slate-800">{cat.category}</span>
                <span className="font-bold text-rose-600">
                  {cat.correct}/{cat.total} Benar ({cat.percentage}%)
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full transition-all duration-700 rounded-full ${
                    cat.percentage >= 70
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                      : cat.percentage >= 50
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                      : 'bg-gradient-to-r from-rose-500 to-red-500'
                  }`}
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="rounded-3xl bg-white border border-emerald-100 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-800">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="font-heading font-bold text-base">Topik Kekuatan Kamu</h3>
          </div>
          {evalResult.strengths.length > 0 ? (
            <div className="space-y-2">
              {evalResult.strengths.map((str, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-50 text-xs sm:text-sm text-emerald-900 font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">
              Perlu terus berlatih menghubungkan konsep antar topik untuk memperkokoh fondasi.
            </p>
          )}
        </div>

        {/* Recommendations */}
        <div className="rounded-3xl bg-white border border-rose-100 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <ShieldCheck className="w-5 h-5 text-rose-600" />
            <h3 className="font-heading font-bold text-base">Rekomendasi Langkah Belajar</h3>
          </div>
          <div className="space-y-2">
            {evalResult.recommendations.map((rec, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-rose-50/70 text-xs sm:text-sm text-rose-900 leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <button
          onClick={() => onNavigate('quiz')}
          className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-heading font-bold text-sm shadow-md transition cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Tinjau Kembali Pembahasan Soal</span>
        </button>

        <button
          onClick={onResetProgress}
          className="flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-rose-200 bg-white hover:bg-rose-50 text-rose-700 font-heading font-semibold text-xs sm:text-sm transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-rose-600" />
          <span>Reset &amp; Coba Latihan Ulang</span>
        </button>
      </div>
    </div>
  );
};
