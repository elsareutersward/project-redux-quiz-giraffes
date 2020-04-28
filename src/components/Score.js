import React from 'react'
import { useSelector } from 'react-redux'

export const Score = () => {
  const everyAnswer = useSelector((state) => state.quiz.answers)
  const correctAnswers = everyAnswer.filter((correct) => correct.isCorrect)

  const result = correctAnswers.length * 1000000

  return (
    <div>
      <h3 className="endGreeting">
        {result > 2000000 ? `Congrats you got ${result} points! 🎉` : 
          `Oh no, you only got ${result} points! 😢 Please try again!`}
      </h3>
    </div>
  )
}
