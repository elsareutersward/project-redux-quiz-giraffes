import React from 'react'
import { useSelector } from 'react-redux'

export const Progress = () => {
  const questionIndex = useSelector((state) => state.quiz.currentQuesionIndex)
  const totalQuestions = useSelector((state) => state.quiz.questions.length)

  return (
    <div>
      <h1>
        {questionIndex + 1}/{totalQuestions}
      </h1>
    </div>
  )
}