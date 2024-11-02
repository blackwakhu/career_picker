import { useState } from 'react'
import './App.css'

const questions = [
  "Rate your creativity?",
  "Rate your love for the outdoors?",
  "Are you willing to be helpful?",
  "Do you love to build new things?",
  "Do you consider yourself to be compassionate?",
  "Do you consider yourself to to be empathetic"
]

const careers = [
  "Doctor, Surgeon", 
  "Computer Scientist, Engineer",
  "Teacher",
  "Scientist, Enviromentalists",
  "Pilot, Astronaut"
]

function App() {

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const [namestr, setNamestr] = useState("What is your name?")
  const [name, setName] = useState("")
  const [questiontxt, setQuestiontxt] = useState(questions[index])
  const [namehideclass, setNameHideclass] = useState("")
  const [questionhideclass, setQuestionHideclass] = useState("hideclass")
  const [careerhideclass, setCareerameHideclass] = useState("hideclass")
  const [careertxt, setCareertxt] = useState("")
  
  const getName = function (event)  {
    event.preventDefault()
    setNamestr(`Hello ${name}`)
    setNameHideclass("hideclass")
    setQuestionHideclass("")
  }

  const doQuestions = function (event, num)  {
    event.preventDefault()
    if (index < questions.length)  {
      setScore(score + num)
      setIndex(index + 1)
      setQuestiontxt(questions[index])
    } else  {
      setQuestionHideclass("hideclass")
      setCareerameHideclass("")
      setIndex(0)
      let avg = Math.floor(score / questions.length)
      setScore(0)
      setCareertxt(careers[avg])
    }
  }

  const startagain = function (e)  {
    e.preventDefault()
    setCareerameHideclass("hideclass")
    setNameHideclass("")
    setNamestr("What is your name?")
  }

  return (
    <>
      <div>
        <h1>Career Questionnaire</h1>
      </div>
      <div>
        <h2>{namestr}</h2>
        <div className={namehideclass}>
          <form action="" onSubmit={getName}>
            <input 
              type="text"
              name="" 
              id="" 
              required
              onChange={(e) => setName(e.target.value)}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={questionhideclass}>
          <h3>{questiontxt}</h3>
          <div>
            <button 
              className="btn-question"
              onClick={
                function (e)  {
                  doQuestions(e, 0)
                }
              }>Very Bad</button>
          </div>
          <br />
          <div>
            <button 
              className="btn-question"
              onClick={
                function (e)  {
                  doQuestions(e, 1)
                }
              }>Bad</button>
          </div>
          <br />
          <div>
            <button 
              className="btn-question"
              onClick={
                function (e)  {
                  doQuestions(e, 2)
                }
              }>Average</button>
          </div>
          <br />
          <div>
            <button 
              className="btn-question"
              onClick={
                function (e)  {
                  doQuestions(e, 3)
                }
              }>Good</button>
          </div>
          <br />
          <div>
            <button 
              className="btn-question"
              onClick={
                function (e)  {
                  doQuestions(e, 4)
                }
              }>Very Good</button>
          </div>
        </div>
        <div className={careerhideclass}>
          <h3>Your career prospect is likely to be</h3>
          <h4>{careertxt}</h4>
          <button onClick={startagain} >Start a new Questionnaire</button>
        </div>
      </div>
    </>
  )
}

export default App
