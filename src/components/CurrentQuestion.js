import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Progress } from './Progress'
import './quiz.css'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()
  const [hasAnswer, setHasAnswer] = useState(false)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleClick = (index) => {
    setHasAnswer(true)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  }

  const nextClick = () => {
    setHasAnswer(false)
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <main className="currentQuestion">
      <img src={question.image} alt="Giraffe" />
      <h1 className="questionText">{question.questionText}</h1>
      <div className="answerContainer">
        {question.options.map((answer, index) => {
          return (
            <button
              className={hasAnswer && index === question.correctAnswerIndex ? 'answerOption green' : 'answerOption'}
              key={index}
              type="button"
              disabled={hasAnswer}
              onClick={() => handleClick(index)}>
              {answer}
            </button>
          )
        })}
      </div>
      <button
        className="moveOn"
        type="button"
        onClick={() => nextClick()}>
        NEXT
      </button>
      <Progress />
    </main>
  )
}
