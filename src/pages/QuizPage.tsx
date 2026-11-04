import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  Volume2, 
  Sparkles, 
  BookOpen, 
  Check, 
  X as CloseIcon, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  BarChart3, 
  RotateCcw,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Question, UserAnswer, UserProgress } from '../types/index.ts';
import { SvgStimulus } from '../components/SvgStimulus.tsx';
import { isAnswerCorrect, isQuestionAnswered } from '../utils/scoring.ts';
import { useTTS } from '../hooks/useTTS.ts';
import { PageId } from '../components/Navbar.tsx';

interface QuizPageProps {
  questions: Question[];
  currentQuestionId: number;
  progress: UserProgress;
  onUpdateAnswer: (questionId: number, answer: UserAnswer) => void;
  onCheckAnswer: (questionId: number) => void;
  onGoToQuestion: (questionId: number) => void;
  onNavigate: (page: PageId) => void;
  tts: ReturnType<typeof useTTS>;
}

export const QuizPage: React.FC<QuizPageProps> = ({
  questions,
  currentQuestionId,
  progress,
  onUpdateAnswer,
  onCheckAnswer,
  onGoToQuestion,
  onNavigate,
  tts,
}) => {
  const [showGridModal, setShowGridModal] = useState(false);
  const [showDiscussionModal, setShowDiscussionModal] = useState(false);
  const [showQuickTrickModal, setShowQuickTrickModal] = useState(false);

  const question = questions.find((q) => q.id === currentQuestionId) || questions[0];
  const userAnswer = progress.answers[question.id];
  const isChecked = !!progress.checkedStatus[question.id];
  const isCorrect = isAnswerCorrect(question, userAnswer);
  const answered = isQuestionAnswered(userAnswer);

  // Auto trigger stimulus intro audio when arriving at question (if enabled)
  useEffect(() => {
    // Only auto-play if setting enabled and not already speaking
    if (tts.settings.autoPlayIntro && !tts.isPlaying) {
      const timer = setTimeout(() => {
        tts.speak(question.narration.stimulusIntro, 'stimulusIntro');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [question.id]);

  // Handlers for Layered Audio
  const handlePlayLayer = (layer: 'stimulusIntro' | 'questionGuide' | 'discussionVoice' | 'quickTrickVoice') => {
    tts.speak(question.narration[layer], layer);
  };

  // Answer selections
  const handleSelectPG = (optionId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    onUpdateAnswer(question.id, { type: 'PG', answer: optionId });
  };

  const handleTogglePGK = (optionId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    const current = (userAnswer?.type === 'PGK' ? userAnswer.answer : []) as ('A' | 'B' | 'C' | 'D' | 'E')[];
    const next = current.includes(optionId)
      ? current.filter((id) => id !== optionId)
      : [...current, optionId];
    onUpdateAnswer(question.id, { type: 'PGK', answer: next });
  };

  const handleSelectBS = (statementId: '1' | '2' | '3', val: 'BENAR' | 'SALAH') => {
    const current = (userAnswer?.type === 'BS' ? userAnswer.answer : { '1': null, '2': null, '3': null });
    onUpdateAnswer(question.id, {
      type: 'BS',
      answer: { ...current, [statementId]: val },
    });
  };

  const handlePrev = () => {
    if (question.id > 1) {
      onGoToQuestion(question.id - 1);
    }
  };

  const handleNext = () => {
    if (question.id < questions.length) {
      onGoToQuestion(question.id + 1);
    } else {
      onNavigate('results');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-28 animate-fade-in">
      {/* Quiz Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-rose-100 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={question.id === 1}
            className={`p-2 rounded-xl text-slate-700 hover:bg-rose-50 border border-slate-200 transition cursor-pointer ${
              question.id === 1 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
            title="Soal Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
                Soal #{question.id}
              </span>
              <span className="text-xs text-slate-400 font-normal">
                dari {questions.length}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-rose-600 truncate max-w-[200px] sm:max-w-xs block">
              {question.category}
            </span>
          </div>
        </div>

        {/* Badges: Type and HOTS level */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
            {question.type === 'PG' && 'Pilihan Ganda (1 Jawaban)'}
            {question.type === 'PGK' && 'Pilihan Ganda Kompleks (Bisa &gt;1)'}
            {question.type === 'BS' && 'Benar-Salah (3 Pernyataan)'}
          </span>

          <span className="text-[11px] font-extrabold px-2 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
            HOTS {question.cognitiveLevel}
          </span>

          <button
            onClick={() => setShowGridModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-700 font-semibold text-xs transition cursor-pointer"
            title="Daftar Nomor Soal"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Daftar Soal</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Working Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Stimulus & Context Narrative (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Scientific Visual Graphic */}
          <SvgStimulus id={question.stimulusImageId} caption={question.imageCaption} />

          {/* Contextual Narrative Card */}
          <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                Wacana Fenomena Ilmiah
              </span>

              {/* TTS Lapis 1 Button */}
              <button
                onClick={() => handlePlayLayer('stimulusIntro')}
                className="flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-full border border-rose-200 transition cursor-pointer"
                title="Dengarkan Pengantar Gambar dari Miss Mega"
              >
                <Volume2 className="w-3 h-3 text-rose-500" />
                <span>Pengantar Gambar</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {question.stimulusNarrative}
            </p>
          </div>
        </div>

        {/* Right Column: Question Prompt & Interactive Options (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-rose-100 shadow-xs space-y-5">
            {/* Question Header & Lapis 2 TTS */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-rose-100">
              <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900 leading-snug">
                {question.questionText}
              </h2>

              <button
                onClick={() => handlePlayLayer('questionGuide')}
                className="flex items-center gap-1 text-[11px] font-bold text-purple-700 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-2.5 py-1 rounded-full border border-purple-200 transition shrink-0 cursor-pointer"
                title="Dengarkan Panduan Memahami Kata Kunci Soal"
              >
                <Volume2 className="w-3 h-3 text-purple-600" />
                <span>Panduan Soal</span>
              </button>
            </div>

            {/* Options Interactive Section */}
            {/* TYPE 1: PG (Single Choice) */}
            {question.type === 'PG' && question.optionsPG && (
              <div className="space-y-2.5">
                {question.optionsPG.map((opt) => {
                  const isSelected = userAnswer?.type === 'PG' && userAnswer.answer === opt.id;
                  const isCorrectOpt = isChecked && opt.id === question.correctAnswerPG;
                  const isWrongOpt = isChecked && isSelected && !isCorrect;

                  let borderClass = 'border-slate-200 hover:border-rose-300 bg-white';
                  if (isSelected) {
                    borderClass = 'border-rose-500 bg-rose-50/50 shadow-xs';
                  }
                  if (isChecked) {
                    if (isCorrectOpt) {
                      borderClass = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold';
                    } else if (isWrongOpt) {
                      borderClass = 'border-red-400 bg-red-50/70 text-red-950';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectPG(opt.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3 cursor-pointer ${borderClass}`}
                    >
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-100 text-slate-600'
                        } ${isChecked && isCorrectOpt ? 'bg-emerald-600 text-white' : ''} ${
                          isChecked && isWrongOpt ? 'bg-red-500 text-white' : ''
                        }`}
                      >
                        {opt.id}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-0.5">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* TYPE 2: PGK (Complex Multiple Choice Checkboxes) */}
            {question.type === 'PGK' && question.optionsPGK && (
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-200 text-xs text-pink-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>
                    Pilihan Ganda Kompleks: Kamu dapat memilih lebih dari satu jawaban benar (2–4 pilihan).
                  </span>
                </div>

                {question.optionsPGK.map((opt) => {
                  const selectedArr = (userAnswer?.type === 'PGK' ? userAnswer.answer : []) as string[];
                  const isSelected = selectedArr.includes(opt.id);
                  const isAnswerKey = question.correctAnswerPGK?.includes(opt.id);

                  let borderClass = 'border-slate-200 hover:border-pink-300 bg-white';
                  if (isSelected) {
                    borderClass = 'border-pink-500 bg-pink-50/50 shadow-xs';
                  }
                  if (isChecked) {
                    if (isAnswerKey) {
                      borderClass = 'border-emerald-500 bg-emerald-50/70 font-semibold';
                    } else if (isSelected && !isAnswerKey) {
                      borderClass = 'border-red-400 bg-red-50/70';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleTogglePGK(opt.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3 cursor-pointer ${borderClass}`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-pink-600 border-pink-600 text-white'
                            : 'border-slate-300 bg-white'
                        } ${isChecked && isAnswerKey ? 'bg-emerald-600 border-emerald-600 text-white' : ''}`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-xs mr-2 text-slate-700">[{opt.id}]</span>
                        <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          {opt.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* TYPE 3: BS (Benar - Salah 3 Statements) */}
            {question.type === 'BS' && question.statementsBS && (
              <div className="space-y-3.5">
                <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200 text-xs text-purple-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>
                    Benar-Salah: Tentukan status kebenaran ilmiah untuk setiap pernyataan berikut secara terpisah.
                  </span>
                </div>

                {question.statementsBS.map((stmt) => {
                  const bsAnswers = (userAnswer?.type === 'BS' ? userAnswer.answer : {}) as Record<string, string | null>;
                  const chosenVal = bsAnswers[stmt.id];
                  const keyVal = stmt.correctAnswer;
                  const isStatementCorrect = isChecked && chosenVal === keyVal;

                  return (
                    <div
                      key={stmt.id}
                      className="p-3.5 sm:p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {stmt.id}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                          {stmt.statement}
                        </p>
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-200/60">
                        <button
                          onClick={() => handleSelectBS(stmt.id, 'BENAR')}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                            chosenVal === 'BENAR'
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-400'
                          }`}
                        >
                          BENAR
                        </button>
                        <button
                          onClick={() => handleSelectBS(stmt.id, 'SALAH')}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                            chosenVal === 'SALAH'
                              ? 'bg-rose-600 text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-600 hover:border-rose-400'
                          }`}
                        >
                          SALAH
                        </button>
                      </div>

                      {/* Immediate item feedback after check */}
                      {isChecked && (
                        <div
                          className={`p-2 rounded-xl text-xs flex items-center gap-2 ${
                            isStatementCorrect
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-red-50 text-red-800 border border-red-200'
                          }`}
                        >
                          {isStatementCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                          )}
                          <span>
                            Kunci: <strong>{keyVal}</strong> — {stmt.rationale}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Verification / Submission Button */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onCheckAnswer(question.id)}
                disabled={!answered}
                className={`flex-1 sm:flex-none px-6 py-3 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer ${
                  !answered
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : isChecked
                    ? 'bg-slate-800 hover:bg-slate-900 text-white'
                    : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-rose-500/20'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isChecked ? 'Simpan & Periksa Ulang' : 'Simpan & Periksa Jawaban'}</span>
              </button>

              {/* Action buttons once checked */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowDiscussionModal(true)}
                  className="px-4 py-2.5 rounded-2xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-rose-600" />
                  <span>Lihat Pembahasan</span>
                </button>

                <button
                  onClick={() => setShowQuickTrickModal(true)}
                  className="px-3.5 py-2.5 rounded-2xl border border-purple-300 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Cara Cepat</span>
                </button>
              </div>
            </div>

            {/* Elegant Feedback Banner */}
            {isChecked && (
              <div
                className={`p-4 rounded-2xl border transition-all animate-fade-in ${
                  isCorrect
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50/80 border-rose-300 text-rose-950'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                    }`}
                  >
                    {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                  </div>
                  <div className="space-y-1">
                    <p className="font-heading font-extrabold text-sm">
                      {isCorrect
                        ? 'Luar Biasa! Jawabanmu Benar!'
                        : 'Belum Tepat, Jangan Khawatir!'}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {isCorrect
                        ? 'Penalaran ilmiahmu sangat tepat. Yuk buka pembahasan untuk memperkaya pemahaman konsepnya.'
                        : 'Pelajari konsep dasarnya lewat pembahasan lengkap Miss Mega agar semakin mantap!'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Bottom Nav to Next Question */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={question.id === 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition cursor-pointer ${
                question.id === 1 ? 'opacity-30 cursor-not-allowed' : ''
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Soal Sebelumnya</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md shadow-rose-500/20 transition cursor-pointer"
            >
              <span>{question.id === questions.length ? 'Lihat Hasil Akhir' : 'Soal Berikutnya'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Navigator Modal */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-rose-100 overflow-hidden">
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Grid className="w-5 h-5 text-white" />
                <h3 className="font-heading font-bold text-base">Daftar 30 Nomor Soal TKA Biologi</h3>
              </div>
              <button
                onClick={() => setShowGridModal(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-5">
              {/* Legend */}
              <div className="flex flex-wrap items-center gap-3 text-xs border-b border-slate-100 pb-3">
                <span className="flex items-center gap-1 text-slate-600">
                  <span className="w-3 h-3 rounded-md bg-slate-100 border border-slate-300" />
                  Belum Dijawab
                </span>
                <span className="flex items-center gap-1 text-blue-700">
                  <span className="w-3 h-3 rounded-md bg-blue-100 border border-blue-400" />
                  Sudah Dijawab
                </span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <span className="w-3 h-3 rounded-md bg-emerald-500 text-white" />
                  Diperiksa Benar
                </span>
                <span className="flex items-center gap-1 text-red-700">
                  <span className="w-3 h-3 rounded-md bg-red-500 text-white" />
                  Diperiksa Salah
                </span>
              </div>

              {/* Grid 30 buttons */}
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2.5">
                {questions.map((q) => {
                  const qAns = progress.answers[q.id];
                  const qChecked = progress.checkedStatus[q.id];
                  const qCorrect = isAnswerCorrect(q, qAns);
                  const isCurrent = q.id === question.id;
                  const isAnswered = isQuestionAnswered(qAns);

                  let bgClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
                  if (isAnswered && !qChecked) {
                    bgClass = 'bg-blue-100 text-blue-800 border-blue-300';
                  }
                  if (qChecked) {
                    if (qCorrect) {
                      bgClass = 'bg-emerald-500 text-white font-bold border-emerald-600';
                    } else {
                      bgClass = 'bg-rose-500 text-white font-bold border-rose-600';
                    }
                  }
                  if (isCurrent) {
                    bgClass += ' ring-2 ring-purple-500 ring-offset-2';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        onGoToQuestion(q.id);
                        setShowGridModal(false);
                      }}
                      className={`h-11 rounded-xl text-xs font-bold border transition flex flex-col items-center justify-center cursor-pointer ${bgClass}`}
                    >
                      <span>{q.id}</span>
                      <span className="text-[9px] opacity-80">{q.type}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500">
                Pilih nomor untuk melompat langsung ke soal.
              </span>
              <button
                onClick={() => setShowGridModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discussion Modal */}
      {showDiscussionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-rose-100 overflow-hidden flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 px-6 py-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base">
                    Pembahasan Komprehensif Soal #{question.id}
                  </h3>
                  <p className="text-[11px] text-rose-100">{question.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePlayLayer('discussionVoice')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-rose-50 text-rose-700 text-xs font-bold shadow-xs transition cursor-pointer"
                  title="Dengarkan Pembahasan oleh Miss Mega"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dengar Pembahasan</span>
                </button>
                <button
                  onClick={() => setShowDiscussionModal(false)}
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-800 text-xs sm:text-sm leading-relaxed">
              {/* Section 1: Konsep Dasar */}
              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-1.5">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  1. Konsep Dasar yang Harus Dipahami
                </h4>
                <p className="text-slate-700">{question.discussion.coreConcept}</p>
              </div>

              {/* Section 2: Analisis Stimulus */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  2. Informasi Penting dari Stimulus Visual
                </h4>
                <p className="text-slate-700">{question.discussion.stimulusAnalysis}</p>
              </div>

              {/* Section 3: Proses Biologis & Hubungan Sebab-Akibat */}
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1.5">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  3. Hubungan Sebab-Akibat &amp; Mekanisme Biologis
                </h4>
                <p className="text-slate-700">{question.discussion.biologicalProcess}</p>
              </div>

              {/* Section 4: Alasan Jawaban & Evaluasi Opsi */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  4. Penalaran Menentukan Jawaban Benar
                </h4>
                <p className="text-slate-700">{question.discussion.answerReasoning}</p>
              </div>

              {/* Section 5: Kesimpulan Ilmiah & Takeaway */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1.5">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  5. Kesimpulan Ilmiah &amp; Inti Materi
                </h4>
                <p className="text-slate-700">{question.discussion.scientificConclusion}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
              <button
                onClick={() => {
                  setShowDiscussionModal(false);
                  setShowQuickTrickModal(true);
                }}
                className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Buka Cara Cepat Miss Mega</span>
              </button>

              <button
                onClick={() => setShowDiscussionModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
              >
                Tutup Pembahasan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Trick Modal */}
      {showQuickTrickModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-purple-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base">Cara Cepat Miss Mega</h3>
                  <p className="text-[11px] text-purple-100">Trik Nalar Ilmiah Praktis</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePlayLayer('quickTrickVoice')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-purple-50 text-purple-700 text-xs font-bold shadow-xs transition cursor-pointer"
                  title="Dengarkan Trik Cepat dari Miss Mega"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dengar Tips</span>
                </button>
                <button
                  onClick={() => setShowQuickTrickModal(false)}
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-xs">
                <p className="text-xs sm:text-sm font-semibold text-purple-950 leading-relaxed italic">
                  "{question.quickTrick}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <p className="font-bold text-slate-800 mb-1">Pesan Miss Mega:</p>
                <p>
                  Trik cepat ini dirancang berdasarkan penalaran konsep, bukan hafalan buta. Gunakan pola ini untuk memangkas waktu pengerjaan soal saat ujian TKA sesungguhnya!
                </p>
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowQuickTrickModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
              >
                Kembali ke Soal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
