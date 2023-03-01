import { Dispatch, SetStateAction } from "react";
import { Question } from "../types";

type QuestionProps = {
  question: Question;
  quizItemId: number;
  setChosenAnswerItem: Dispatch<SetStateAction<string[]>>;
  chosenAnswerItem: string[];
  setUnanswerQuestionsIs: Dispatch<SetStateAction<any[]>>;
  unanswerQuestionsIs: any[];
};

export const QuestionBlock = ({
  question,
  quizItemId,
  setChosenAnswerItem,
  chosenAnswerItem,
  setUnanswerQuestionsIs,
  unanswerQuestionsIs,
}: QuestionProps) => {
  const handleClick = () => {
    setChosenAnswerItem((prevState: string[]) => [...prevState, question.text]);
    setUnanswerQuestionsIs(
      unanswerQuestionsIs?.filter((id) => id != quizItemId)
    );
  };

  const validPick = !chosenAnswerItem?.includes(question.text) && !unanswerQuestionsIs?.includes(quizItemId);

  return (
    <button
      className="question-block"
      onClick={handleClick}
      disabled={validPick}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} - </a>
        <a href="https://www.unsplash.com">Unsplash</a>
      </p>
    </button>
  );
};
