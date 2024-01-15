export type TScores = number[];

export type TAnswer = {
  text: string,
  isCorrect?: boolean
};

export type TQuestion = {
  text: string
  answers: TAnswer[]
};
