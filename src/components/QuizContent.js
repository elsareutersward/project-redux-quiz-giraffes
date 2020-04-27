import React from 'react'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { StartingPage } from 'components/StartingPage'
import { Summary } from 'components/Summary'

export const QuizContent = () => {
  const isStarted = useSelector((state) => state.quiz.quizStarted)
  const isOver = useSelector((state) => state.quiz.quizOver)

  if (!isStarted && !isOver) {
    return (<div><StartingPage /></div>)
  } else if (isStarted && !isOver) {
    return (<div><CurrentQuestion /></div>)
  } else {
    return (<div><Summary /></div>)
  }
}
