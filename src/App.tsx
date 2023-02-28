import { useState, useEffect } from "react";
import { Title, QuestionsBlock } from "./components";

import { ContentQuiz } from "./types";

const App = () => {
  const [quiz, setQuiz] = useState<any>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      // console.log("🚀 ~ file: App.tsx:11 ~ fetchData ~ json:", json)
      setQuiz(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content.map((contentItem: ContentQuiz) => (
        <QuestionsBlock key={contentItem.id} quizItem={contentItem} />
      ))}
    </div>
  );
};

export default App;
