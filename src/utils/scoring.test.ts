import test from 'node:test';
import assert from 'node:assert/strict';
import { isAnswerCorrect, isQuestionAnswered, evaluateQuiz } from './scoring.ts';
import { Question, UserAnswer } from '../types/index.ts';

const mockQuestions: Question[] = [
  {
    id: 1,
    category: 'Keanekaragaman Hayati dan Bakteri',
    categorySlug: 'keanekaragaman',
    type: 'PG',
    cognitiveLevel: 'C4',
    title: 'Persebaran Garis Wallace',
    stimulusNarrative: 'Stimulus...',
    stimulusImageId: 'q1-wallace',
    imageCaption: 'Peta Wallace',
    questionText: 'Manakah kesimpulan yang tepat?',
    optionsPG: [
      { id: 'A', text: 'Opsi A' },
      { id: 'B', text: 'Opsi B' },
      { id: 'C', text: 'Opsi C' },
      { id: 'D', text: 'Opsi D' },
      { id: 'E', text: 'Opsi E' },
    ],
    correctAnswerPG: 'C',
    discussion: {
      coreConcept: 'Konsep',
      stimulusAnalysis: 'Analisis',
      biologicalProcess: 'Proses',
      answerReasoning: 'Alasan',
      scientificConclusion: 'Kesimpulan',
    },
    quickTrick: 'Trik cepat',
    narration: {
      stimulusIntro: 'Intro',
      questionGuide: 'Guide',
      discussionVoice: 'Voice',
      quickTrickVoice: 'Trick Voice',
    },
    keyTakeaway: 'Takeaway',
  },
  {
    id: 2,
    category: 'Sel dan Metabolisme',
    categorySlug: 'sel-metabolisme',
    type: 'PGK',
    cognitiveLevel: 'C5',
    title: 'Inhibitor Enzim',
    stimulusNarrative: 'Stimulus Enzim...',
    stimulusImageId: 'q2-enzyme',
    imageCaption: 'Grafik Enzim',
    questionText: 'Manakah pernyataan yang benar? (Pilih semua yang sesuai)',
    optionsPGK: [
      { id: 'A', text: 'Opsi A' },
      { id: 'B', text: 'Opsi B' },
      { id: 'C', text: 'Opsi C' },
      { id: 'D', text: 'Opsi D' },
      { id: 'E', text: 'Opsi E' },
    ],
    correctAnswerPGK: ['A', 'C', 'D'],
    discussion: {
      coreConcept: 'Konsep',
      stimulusAnalysis: 'Analisis',
      biologicalProcess: 'Proses',
      answerReasoning: 'Alasan',
      scientificConclusion: 'Kesimpulan',
    },
    quickTrick: 'Trik cepat',
    narration: {
      stimulusIntro: 'Intro',
      questionGuide: 'Guide',
      discussionVoice: 'Voice',
      quickTrickVoice: 'Trick Voice',
    },
    keyTakeaway: 'Takeaway',
  },
  {
    id: 3,
    category: 'Sistem Organ Manusia',
    categorySlug: 'organ-manusia',
    type: 'BS',
    cognitiveLevel: 'C4',
    title: 'Nefron dan Filtrasi',
    stimulusNarrative: 'Stimulus Nefron...',
    stimulusImageId: 'q3-nephron',
    imageCaption: 'Diagram Nefron',
    questionText: 'Tentukan Benar atau Salah setiap pernyataan berikut:',
    statementsBS: [
      { id: '1', statement: 'Pernyataan 1', correctAnswer: 'BENAR', rationale: 'Alasan 1' },
      { id: '2', statement: 'Pernyataan 2', correctAnswer: 'SALAH', rationale: 'Alasan 2' },
      { id: '3', statement: 'Pernyataan 3', correctAnswer: 'BENAR', rationale: 'Alasan 3' },
    ],
    correctAnswerBS: {
      '1': 'BENAR',
      '2': 'SALAH',
      '3': 'BENAR',
    },
    discussion: {
      coreConcept: 'Konsep',
      stimulusAnalysis: 'Analisis',
      biologicalProcess: 'Proses',
      answerReasoning: 'Alasan',
      scientificConclusion: 'Kesimpulan',
    },
    quickTrick: 'Trik cepat',
    narration: {
      stimulusIntro: 'Intro',
      questionGuide: 'Guide',
      discussionVoice: 'Voice',
      quickTrickVoice: 'Trick Voice',
    },
    keyTakeaway: 'Takeaway',
  },
];

test('isAnswerCorrect checks PG correctly', () => {
  const ansCorrect: UserAnswer = { type: 'PG', answer: 'C' };
  const ansWrong: UserAnswer = { type: 'PG', answer: 'B' };
  const ansEmpty: UserAnswer = { type: 'PG', answer: null };

  assert.equal(isAnswerCorrect(mockQuestions[0], ansCorrect), true);
  assert.equal(isAnswerCorrect(mockQuestions[0], ansWrong), false);
  assert.equal(isAnswerCorrect(mockQuestions[0], ansEmpty), false);
});

test('isAnswerCorrect checks PGK correctly with multiple options', () => {
  const ansExact: UserAnswer = { type: 'PGK', answer: ['A', 'C', 'D'] };
  const ansPartial: UserAnswer = { type: 'PGK', answer: ['A', 'C'] };
  const ansExtra: UserAnswer = { type: 'PGK', answer: ['A', 'B', 'C', 'D'] };

  assert.equal(isAnswerCorrect(mockQuestions[1], ansExact), true);
  assert.equal(isAnswerCorrect(mockQuestions[1], ansPartial), false);
  assert.equal(isAnswerCorrect(mockQuestions[1], ansExtra), false);
});

test('isAnswerCorrect checks BS statements correctly', () => {
  const ansFullCorrect: UserAnswer = {
    type: 'BS',
    answer: { '1': 'BENAR', '2': 'SALAH', '3': 'BENAR' },
  };
  const ansPartial: UserAnswer = {
    type: 'BS',
    answer: { '1': 'BENAR', '2': 'BENAR', '3': 'BENAR' },
  };

  assert.equal(isAnswerCorrect(mockQuestions[2], ansFullCorrect), true);
  assert.equal(isAnswerCorrect(mockQuestions[2], ansPartial), false);
});

test('isQuestionAnswered verifies answered states', () => {
  assert.equal(isQuestionAnswered({ type: 'PG', answer: 'A' }), true);
  assert.equal(isQuestionAnswered({ type: 'PG', answer: null }), false);
  assert.equal(isQuestionAnswered({ type: 'PGK', answer: ['A'] }), true);
  assert.equal(isQuestionAnswered({ type: 'PGK', answer: [] }), false);
  assert.equal(
    isQuestionAnswered({
      type: 'BS',
      answer: { '1': 'BENAR', '2': 'SALAH', '3': 'BENAR' },
    }),
    true
  );
  assert.equal(
    isQuestionAnswered({
      type: 'BS',
      answer: { '1': 'BENAR', '2': null, '3': 'BENAR' },
    }),
    false
  );
});

test('evaluateQuiz calculates statistics and mastery tiers correctly', () => {
  const answers: Record<number, UserAnswer> = {
    1: { type: 'PG', answer: 'C' }, // correct
    2: { type: 'PGK', answer: ['A', 'C', 'D'] }, // correct
    3: { type: 'BS', answer: { '1': 'BENAR', '2': 'BENAR', '3': 'BENAR' } }, // wrong
  };

  const evalResult = evaluateQuiz(mockQuestions, answers);
  assert.equal(evalResult.totalQuestions, 3);
  assert.equal(evalResult.answeredCount, 3);
  assert.equal(evalResult.correctCount, 2);
  assert.equal(evalResult.incorrectCount, 1);
  assert.equal(evalResult.scorePercentage, 67);
  assert.equal(evalResult.masteryLevel, 'Perlu Penguatan');
  assert.ok(evalResult.strengths.includes('Keanekaragaman Hayati dan Bakteri'));
  assert.ok(evalResult.strengths.includes('Sel dan Metabolisme'));
  assert.ok(evalResult.weaknesses.includes('Sistem Organ Manusia'));
});
