export type QuestionType = 'PG' | 'PGK' | 'BS';
export type CognitiveLevel = 'C3' | 'C4' | 'C5' | 'C6';

export interface OptionPG {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface OptionPGK {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface StatementBS {
  id: '1' | '2' | '3';
  statement: string;
  correctAnswer: 'BENAR' | 'SALAH';
  rationale: string;
}

export interface QuestionDiscussion {
  coreConcept: string;
  stimulusAnalysis: string;
  biologicalProcess: string;
  answerReasoning: string;
  scientificConclusion: string;
}

export interface QuestionNarration {
  stimulusIntro: string; // Lapis 1
  questionGuide: string; // Lapis 2
  discussionVoice: string; // Lapis 3
  quickTrickVoice: string; // Lapis 4
}

export interface Question {
  id: number;
  category: string;
  categorySlug: 'keanekaragaman' | 'ekosistem' | 'sel-metabolisme' | 'organ-manusia' | 'penalaran-ilmiah';
  type: QuestionType;
  cognitiveLevel: CognitiveLevel;
  title: string;
  stimulusNarrative: string;
  stimulusImageId: string;
  imageCaption: string;
  questionText: string;
  
  // Type specific options
  optionsPG?: OptionPG[];
  optionsPGK?: OptionPGK[];
  statementsBS?: StatementBS[];

  // Answer keys
  correctAnswerPG?: 'A' | 'B' | 'C' | 'D' | 'E';
  correctAnswerPGK?: ('A' | 'B' | 'C' | 'D' | 'E')[];
  correctAnswerBS?: Record<'1' | '2' | '3', 'BENAR' | 'SALAH'>;

  discussion: QuestionDiscussion;
  quickTrick: string;
  narration: QuestionNarration;
  keyTakeaway: string;
}

export type UserAnswer = 
  | { type: 'PG'; answer: 'A' | 'B' | 'C' | 'D' | 'E' | null }
  | { type: 'PGK'; answer: ('A' | 'B' | 'C' | 'D' | 'E')[] }
  | { type: 'BS'; answer: Record<'1' | '2' | '3', 'BENAR' | 'SALAH' | null> };

export interface UserProgress {
  currentQuestionId: number;
  answers: Record<number, UserAnswer>;
  checkedStatus: Record<number, boolean>;
  openedDiscussion: Record<number, boolean>;
  openedQuickTrick: Record<number, boolean>;
  startedAt?: number;
  completedAt?: number;
}

export interface CategoryScore {
  category: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface QuizEvaluation {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scorePercentage: number;
  categoryScores: Record<string, CategoryScore>;
  masteryLevel: string;
  masteryDescription: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  encouragementVoice: string;
}

export interface VoiceSettings {
  rate: number;
  volume: number;
  voiceURI: string;
  autoPlayIntro: boolean;
}
