import React from 'react';
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const StartButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    return (
      dispatch(quiz.actions.startQuiz())
    )
  }

  return (
    <button
      onClick={handleClick}
      className="startButton"
      type="button">
      Start quiz
    </button>
  )
}