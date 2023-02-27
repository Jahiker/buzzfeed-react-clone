import { useState, useEffect } from "react";
import { Title } from "./components";

const App = () => {
  const [quiz, setQuiz] = useState<any>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      console.log("🚀 ~ file: App.tsx:11 ~ fetchData ~ json:", json)
      setQuiz(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Title title={quiz?.title} subTitle={quiz?.subTitle} />
    </div>
  );
};

export default App;
