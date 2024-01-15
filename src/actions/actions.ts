'use server';
import data from '@/data.json';
import { TAnswer, TQuestion, TScores } from '@/types';

export const getInitialData = async () => {
  const scores: TScores = data.scores;
  const questions: TQuestion[] = data.questions;
  const questionsWithoutCorrectData: TQuestion[] = questions.map((question) => ({
    ...question,
    answer: question.answers.map((answer) => answer.text),
  }));
  return {
    scores,
    questions: questionsWithoutCorrectData,
  };
};

export const getCorrect = async (indexQuestion: number, indexAnswer: number): Promise<TAnswer> => {
  const question: TQuestion = data.questions[indexQuestion];
  return question.answers[indexAnswer];
};

