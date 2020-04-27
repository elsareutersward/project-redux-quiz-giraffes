import { createSlice } from '@reduxjs/toolkit'

const questions = [
  {
    id: 1,
    image: './assets/giraffe_01.jpg',
    questionText: 'How many species of giraffe are there?',
    options: [
      'one',
      'five',
      'twelve',
      'seven'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    image: './assets/giraffe_04.jpg',
    questionText: 'Where do giraffes live?',
    options: [
      'South America',
      'Asia',
      'Europe',
      'Africa'
    ],
    correctAnswerIndex: 3
  },
  {
    id: 3,
    image: './assets/giraffe_03.jpg',
    questionText: 'What kind of terrain do giraffes prefer?',
    options: [
      'rocky slopes',
      'dense forests',
      'open grassy plains',
      'frosty hillsides'
    ],
    correctAnswerIndex: 2
  },
  {
    id: 4,
    image: './assets/giraffe_05.jpg',
    questionText: "How long is the giraffe's neck?",
    options: [
      '2.1 m',
      '2.4 m',
      '2.7 m',
      '3 m'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 5,
    image: './assets/giraffe_02.jpg',
    questionText: "Just how long is the giraffe's tongue?",
    options: [
      '38 cm',
      '53 cm',
      '45 cm',
      '30 cm'
    ],
    correctAnswerIndex: 1
  }
]

const initialState = {
  questions,
  answers: [],
  currentQuesionIndex: 0,
  quizOver: false,
  quizStarted: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }
      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }
      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },
    goToNextQuestion: (state) => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuesionIndex += 1
      }
    },
    restart: () => {
      return initialState
    },

    startQuiz: (state) => {
      state.quizStarted = true
    }
  }
})
