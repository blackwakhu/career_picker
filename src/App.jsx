import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const questions = [
  "Rate your creativity?",
  "Rate your love for the outdoors?",
  "Are you willing to be helpful?",
  "Do you love to build new things?",
  "Do you consider yourself to be compassionate?",
  "Do you consider yourself to to be empathetic"
]

function App() {
  const [index, setIndex] = useState(0)
  const [namestr, setNamestr] = useState("What is your name?")
  const [name, setName] = useState("")
  const [questiontxt, setQuestiontxt] = useState(questions[0])
  const [namehideclass, setNameHideclass] = useState("")
  const [questionhideclass, setQuestionHideclass] = useState("questionhideclass")
  const [careerhideclass, setCareerameHideclass] = useState("careerhideclass")
  const getName = function (event)  {
    event.preventDefault()
    setNamestr(`Hello ${name}`)
    setNameHideclass("namehideclass")
    setQuestionHideclass("")
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
            <input type="text" name="" id="" onChange={(e) => setName(e.target.value)}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className={questionhideclass}>
          <h3>{questiontxt}</h3>
          <div>
            <button>Very Bad</button>
          </div>
          <br />
          <div>
            <button>Bad</button>
          </div>
          <br />
          <div>
            <button>Average</button>
          </div>
          <br />
          <div>
            <button>Good</button>
          </div>
          <br />
          <div>
            <button>Very Good</button>
          </div>
        </div>
        <div className={careerhideclass}></div>
      </div>
    </>
  )
}

export default App
