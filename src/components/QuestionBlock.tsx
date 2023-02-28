import { Question } from "../types"

type QuestionProps = {
  question: Question
}

export const QuestionBlock = ({question}: QuestionProps) => {
  console.log(question)
  return (
    <div>QuestionBlock</div>
  )
}
