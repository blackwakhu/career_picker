import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [namestr, setNamestr] = useState("What is your name?")
  const [name, setName] = useState("")
  const getName = function (event)  {
    event.preventDefault()
    alert("clicked")
  }

  return (
    <>
      <div>
        <h1>Career Questionnaire</h1>
      </div>
      <div>
        <h2>{namestr}</h2>
        <div>
          <form action="" onSubmit={getName}>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default App
