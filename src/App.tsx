import { useState, useEffect } from "react";
import { Title, QuestionsBlock } from "./components";

import { ContentQuiz } from "./types";

const App = () => {
  const [quiz, setQuiz] = useState<any>(null);
  const [chosenAnswerItem, setChosenAnswerItem] = useState<string[]>([]);
  const [unanswerQuestionsIs, setUnanswerQuestionsIs] = useState<any[]>([]);


  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      console.log("🚀 ~ file: App.tsx:11 ~ fetchData ~ json:", json);
      setQuiz(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unanswerdIds = quiz?.content?.map(({ id }: ContentQuiz) => id);
    setUnanswerQuestionsIs(unanswerdIds);
  }, [quiz])

  useEffect(() => {
    if (unanswerQuestionsIs) {
      if (unanswerQuestionsIs.length <= 0 && chosenAnswerItem.length >= 1) {
        // Scroll to answer block
      }
      // Scroll to highest unanswerQuestionsIs
      const highestId = Math.min(...unanswerQuestionsIs);
      const highestElement = document.getElementById(`${highestId}`);
      highestElement?.scrollIntoView({ behavior: "smooth" });
    }
  },[unanswerQuestionsIs, chosenAnswerItem])

  console.log(chosenAnswerItem);
  console.log(unanswerQuestionsIs);

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content.map((contentItem: ContentQuiz) => (
        <QuestionsBlock
          key={contentItem.id}
          quizItem={contentItem}
          setChosenAnswerItem={setChosenAnswerItem}
          chosenAnswerItem={chosenAnswerItem}
          setUnanswerQuestionsIs={setUnanswerQuestionsIs}
          unanswerQuestionsIs={unanswerQuestionsIs}
        />
      ))}
    </div>
  );
};

export default App;
