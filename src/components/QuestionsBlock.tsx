import { Dispatch, SetStateAction } from "react";
import { ContentQuiz } from "../types";
import { QuestionBlock } from "./QuestionBlock";

export type QuestionsBlockProps = {
  quizItem: ContentQuiz;
  setChosenAnswerItem: Dispatch<SetStateAction<string[]>>;
  chosenAnswerItem: string[];
  setUnanswerQuestionsIs: Dispatch<SetStateAction<any[] | null>>;
  unanswerQuestionsIs: any[] | null;
};

export const QuestionsBlock = ({
  quizItem,
  setChosenAnswerItem,
  chosenAnswerItem,
  setUnanswerQuestionsIs,
  unanswerQuestionsIs
}: QuestionsBlockProps) => {
  return (
    <>
      <h2 id={`${quizItem.id}`} className="question-title">
        {quizItem.text}
      </h2>
      <div className="questions-container">
        {quizItem?.questions.map((question, _index) => (
          <QuestionBlock
            key={_index}
            quizItemId={quizItem.id}
            question={question}
            setChosenAnswerItem={setChosenAnswerItem}
            chosenAnswerItem={chosenAnswerItem}
            setUnanswerQuestionsIs={setUnanswerQuestionsIs}
            unanswerQuestionsIs={unanswerQuestionsIs}
          />
        ))}
      </div>
    </>
  );
};
