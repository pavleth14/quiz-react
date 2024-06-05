import { useState } from 'react'
import './App.css'
import { questions } from './questions'

function App() {

  console.log(questions);

  const correctQuestions = ['Kobe Bryant', 'Usain Bolt', 'Ferrari f430'];

  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);

  const handleAnswer = (answer) => {
    setIsAnswerClicked(true);
    setSelectedAnswer(answer);
    if(correctQuestions.includes(answer)) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false);
    }
  }

  const handleButton = () => {
    setIsAnswerClicked(false);
  }

  return (
    <>
      <h1>{questions[numberOfQuestion].question}</h1>
      
      <div className='answersDiv'>
      {questions[numberOfQuestion].answers.map((answer, index) => (
        <div 
          key={index}
          className={`answerDiv ${selectedAnswer === answer ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
          onClick={!isAnswerClicked ? () => handleAnswer(answer) : null} >
          <p>{answer}</p>
        </div>
      ))}
      </div>
      
      <button onClick={handleButton}>Next question</button>
    </>
  )
}

export default App;