import { Question, UserAnswer, QuizEvaluation, CategoryScore } from '../types/index.ts';

export function isAnswerCorrect(question: Question, userAnswer?: UserAnswer): boolean {
  if (!userAnswer) return false;

  if (question.type === 'PG') {
    if (userAnswer.type !== 'PG') return false;
    return !!userAnswer.answer && userAnswer.answer === question.correctAnswerPG;
  }

  if (question.type === 'PGK') {
    if (userAnswer.type !== 'PGK' || !question.correctAnswerPGK) return false;
    const selected = new Set(userAnswer.answer);
    const correct = new Set(question.correctAnswerPGK);
    if (selected.size !== correct.size) return false;
    for (const item of correct) {
      if (!selected.has(item)) return false;
    }
    return true;
  }

  if (question.type === 'BS') {
    if (userAnswer.type !== 'BS' || !question.correctAnswerBS) return false;
    const ans = userAnswer.answer;
    const key = question.correctAnswerBS;
    return (
      ans['1'] === key['1'] &&
      ans['2'] === key['2'] &&
      ans['3'] === key['3']
    );
  }

  return false;
}

export function isQuestionAnswered(userAnswer?: UserAnswer): boolean {
  if (!userAnswer) return false;
  if (userAnswer.type === 'PG') {
    return userAnswer.answer !== null;
  }
  if (userAnswer.type === 'PGK') {
    return userAnswer.answer.length > 0;
  }
  if (userAnswer.type === 'BS') {
    return (
      userAnswer.answer['1'] !== null &&
      userAnswer.answer['2'] !== null &&
      userAnswer.answer['3'] !== null
    );
  }
  return false;
}

export function evaluateQuiz(
  questions: Question[],
  answers: Record<number, UserAnswer>
): QuizEvaluation {
  const totalQuestions = questions.length;
  let answeredCount = 0;
  let correctCount = 0;

  const categoryScores: Record<string, { total: number; correct: number }> = {};

  for (const q of questions) {
    if (!categoryScores[q.category]) {
      categoryScores[q.category] = { total: 0, correct: 0 };
    }
    categoryScores[q.category].total += 1;

    const userAns = answers[q.id];
    const answered = isQuestionAnswered(userAns);
    if (answered) answeredCount += 1;

    const correct = isAnswerCorrect(q, userAns);
    if (correct) {
      correctCount += 1;
      categoryScores[q.category].correct += 1;
    }
  }

  const incorrectCount = answeredCount - correctCount;
  const unansweredCount = totalQuestions - answeredCount;
  const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const finalCategoryScores: Record<string, CategoryScore> = {};
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  for (const [catName, stats] of Object.entries(categoryScores)) {
    const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    finalCategoryScores[catName] = {
      category: catName,
      total: stats.total,
      correct: stats.correct,
      percentage: pct,
    };
    if (pct >= 70) {
      strengths.push(catName);
    } else {
      weaknesses.push(catName);
    }
  }

  let masteryLevel = 'Perlu Pendampingan Lebih Lanjut';
  let masteryDescription = 'Perlu pendampingan lebih lanjut dan pendalaman konsep dasar secara bertahap.';
  let encouragementVoice = 'Kerja keras yang bagus! Belajar Biologi membutuhkan ketelitian dan latihan berkelanjutan. Miss Mega siap mendampingimu mempelajari konsep-konsep kunci agar pemahamanmu semakin kokoh.';

  if (scorePercentage >= 90) {
    masteryLevel = 'Sangat Menguasai';
    masteryDescription = 'Luar biasa! Pemahaman konsep Biologi dan daya analisis HOTS kamu sangat tajam dan matang.';
    encouragementVoice = 'Luar biasa sekali! Kamu menunjukkan pemahaman tingkat tinggi yang sangat membanggakan. Terus jaga ketajaman analisis dan rasa ingin tahumu untuk menaklukkan TKA Biologi 2026!';
  } else if (scorePercentage >= 80) {
    masteryLevel = 'Menguasai';
    masteryDescription = 'Sangat baik! Penguasaan materi sudah menyeluruh dengan kemampuan penalaran ilmiah yang solid.';
    encouragementVoice = 'Hebat! Kamu telah menguasai sebagian besar materi dan penalaran data dengan sangat baik. Sedikit polesan lagi pada topik spesifik, kamu akan meraih nilai maksimal!';
  } else if (scorePercentage >= 70) {
    masteryLevel = 'Cukup Menguasai';
    masteryDescription = 'Bagus! Fondasi konsep Biologi sudah cukup baik, perlu peningkatan ketelitian membaca stimulus data.';
    encouragementVoice = 'Bagus sekali! Fondasi pemahaman Biologimu sudah terbentuk. Asah lagi kemampuan membaca grafik dan hubungan sebab-akibat bersama Miss Mega.';
  } else if (scorePercentage >= 60) {
    masteryLevel = 'Perlu Penguatan';
    masteryDescription = 'Cukup! Perlu memperkuat kembali pemahaman mekanisme biokimia dan hubungan antar sistem organ.';
    encouragementVoice = 'Jangan berkecil hati, perjalanan masih panjang! Perhatikan kembali trik cepat dan pembahasan detail di setiap soal. Miss Mega yakin kamu bisa meningkat pesat!';
  }

  const recommendations: string[] = [];
  if (weaknesses.length === 0) {
    recommendations.push('Pertahankan ketelitian dan cobalah memperdalam studi kasus biologi kontekstual tingkat lanjut.');
    recommendations.push('Berlatih manajemen waktu pengerjaan soal dengan tingkat kesulitan C5 dan C6.');
  } else {
    for (const w of weaknesses) {
      recommendations.push(`Pelajari kembali konsep inti pada materi "${w}" terutama analisis bagan dan grafik.`);
    }
    recommendations.push('Manfaatkan fitur "Cara Cepat Miss Mega" dan dengarkan pembahasan narator secara menyeluruh.');
  }

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    incorrectCount,
    unansweredCount,
    scorePercentage,
    categoryScores: finalCategoryScores,
    masteryLevel,
    masteryDescription,
    strengths,
    weaknesses,
    recommendations,
    encouragementVoice,
  };
}
