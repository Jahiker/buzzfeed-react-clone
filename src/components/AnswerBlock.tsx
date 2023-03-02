import { useState, useEffect, useRef } from "react";

import { Answer } from "../types";

type AnswerBlockType = {
  answerOptions: Answer[];
  chosenAnswerItem: string[];
};

export const AnswerBlock = ({
  answerOptions,
  chosenAnswerItem,
}: AnswerBlockType) => {
  const [result, setResult] = useState<Answer>();

  const answerBlock = useRef<any>();

  useEffect(() => {
    answerOptions.forEach((answer) => {
      if (
        chosenAnswerItem.includes(answer.combination[0]) &&
        chosenAnswerItem.includes(answer.combination[1]) &&
        chosenAnswerItem.includes(answer.combination[2])
      ) {
        setResult(answer);
        answerBlock?.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else if (!result) {
        setResult(answerOptions[0]);
      }
    });
  }, [result]);

  return (
    <div id="answer-block" className="answer-block" ref={answerBlock}>
      <h2>{result?.text}</h2>
      <img src={result?.image} alt={result?.text} />
    </div>
  );
};
