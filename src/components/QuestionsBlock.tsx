import { ContentQuiz } from "../types";
import { QuestionBlock } from "./QuestionBlock";

export type QuestionsBlockProps = {
  quizItem: ContentQuiz;
};

export const QuestionsBlock = ({ quizItem }: QuestionsBlockProps) => {
  return (
    <>
      <h2 id={`${quizItem.id}`} className="question-title">
        {quizItem.text}
      </h2>
      <div className="questions-container"></div>
      {quizItem?.questions.map((question, index) => (
        <QuestionBlock key={index} question={question} />
      ))}
    </>
  );
};
