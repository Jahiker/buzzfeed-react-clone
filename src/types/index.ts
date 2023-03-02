export type Question = {
  alt: string;
  credit: string;
  image: string;
  text: string;
};

export type Answer = {
  alt: string;
  combination: string[];
  image: string;
  text: string
}

export type ContentQuiz = {
  id: number;
  text: string;
  questions: Question[];
};
