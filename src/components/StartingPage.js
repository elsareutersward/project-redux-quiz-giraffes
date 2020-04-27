import React from 'react'
import { StartButton } from 'components/StartButton'
import './quiz.css'

export const StartingPage = () => {
  return (
    <div className="welcomeContainer">
      <h1 className="welcomeGreeting">Welcome to the quiz</h1>
      <span className="welcomeText">
        This is the number one quiz to test your knowledge 
        on the wonderous and mystical animal The Giraffe <span role="img" aria-label="giraffe">🦒</span>
      </span>
      <StartButton />
    </div>
  )
}