/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar.tsx';
import { AudioPlayerBar } from './components/AudioPlayerBar.tsx';
import { OfflineIndicator } from './components/OfflineIndicator.tsx';
import { SettingsModal } from './components/SettingsModal.tsx';
import { AboutModal } from './components/AboutModal.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { InstructionsPage } from './pages/InstructionsPage.tsx';
import { QuizPage } from './pages/QuizPage.tsx';
import { TopicsPage } from './pages/TopicsPage.tsx';
import { ResultsPage } from './pages/ResultsPage.tsx';

import { questionsData } from './data/questions.ts';
import { UserProgress, UserAnswer } from './types/index.ts';
import { useTTS } from './hooks/useTTS.ts';
import { isQuestionAnswered } from './utils/scoring.ts';

const PROGRESS_STORAGE_KEY = 'tka_biologi_2026_progress';

export default function App() {
  const tts = useTTS();

  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        return 'quiz';
      }
    }
    return 'home';
  });

  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (e) {
        console.warn('Failed to load saved progress:', e);
      }
    }
    return {
      currentQuestionId: 1,
      answers: {},
      checkedStatus: {},
      openedDiscussion: {},
      openedQuickTrick: {},
      startedAt: Date.now(),
    };
  });

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  // Auto-save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [progress]);

  // Answer handler
  const handleUpdateAnswer = (questionId: number, answer: UserAnswer) => {
    setProgress((prev) => ({
      ...prev,
      currentQuestionId: questionId,
      answers: {
        ...prev.answers,
        [questionId]: answer,
      },
    }));
  };

  // Check answer handler
  const handleCheckAnswer = (questionId: number) => {
    setProgress((prev) => ({
      ...prev,
      checkedStatus: {
        ...prev.checkedStatus,
        [questionId]: true,
      },
    }));
  };

  // Navigate to specific question
  const handleGoToQuestion = (questionId: number) => {
    setProgress((prev) => ({
      ...prev,
      currentQuestionId: questionId,
    }));
    setCurrentPage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset Progress handler
  const handleConfirmReset = () => {
    const initial: UserProgress = {
      currentQuestionId: 1,
      answers: {},
      checkedStatus: {},
      openedDiscussion: {},
      openedQuickTrick: {},
      startedAt: Date.now(),
    };
    setProgress(initial);
    try {
      localStorage.removeItem(PROGRESS_STORAGE_KEY);
    } catch {
      // ignore
    }
    setResetDialogOpen(false);
    tts.stop();
    setCurrentPage('home');
    tts.speak(
      'Progress belajarmu telah berhasil di-reset. Mari kita mulai lembar latihan baru bersama Miss Mega!',
      'reset'
    );
  };

  // Count answered
  const answeredCount = Object.values(progress.answers).filter(isQuestionAnswered).length;

  return (
    <div className="min-h-screen flex flex-col bg-rose-50/30 text-slate-800">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSettings={() => setSettingsOpen(true)}
        onResetProgress={() => setResetDialogOpen(true)}
        answeredCount={answeredCount}
        totalQuestions={questionsData.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAbout={() => setAboutOpen(true)}
            answeredCount={answeredCount}
            totalQuestions={questionsData.length}
            tts={tts}
          />
        )}

        {currentPage === 'instructions' && (
          <InstructionsPage
            onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            tts={tts}
          />
        )}

        {currentPage === 'quiz' && (
          <QuizPage
            questions={questionsData}
            currentQuestionId={progress.currentQuestionId}
            progress={progress}
            onUpdateAnswer={handleUpdateAnswer}
            onCheckAnswer={handleCheckAnswer}
            onGoToQuestion={handleGoToQuestion}
            onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            tts={tts}
          />
        )}

        {currentPage === 'topics' && (
          <TopicsPage
            onNavigateToQuestion={handleGoToQuestion}
            onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'results' && (
          <ResultsPage
            questions={questionsData}
            progress={progress}
            onNavigate={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToQuestion={handleGoToQuestion}
            onResetProgress={() => setResetDialogOpen(true)}
            tts={tts}
          />
        )}
      </main>

      {/* Floating Audio Player Bar */}
      <AudioPlayerBar
        tts={tts}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      {/* Offline Status Badge */}
      <OfflineIndicator />

      {/* Settings & Reset Modals */}
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        tts={tts}
        resetDialogOpen={resetDialogOpen}
        onCloseResetDialog={() => setResetDialogOpen(false)}
        onConfirmReset={handleConfirmReset}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />
    </div>
  );
}
