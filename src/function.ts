const btn: HTMLDivElement = document.querySelector("#btn")
const body: HTMLBodyElement  = document.querySelector("body")
const beginner: HTMLDivElement = document.querySelector("#beginner")
const compliment: HTMLDivElement = document.querySelector("#compliment")
const entry: HTMLInputElement = document.querySelector("#entry")

let questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"]
let index: number = 0
let careers = ["doctor", "computer scientist", "teacher","engineer", "scientist","surgeon","pilot","enviromentalist","model","astronaught"]
let choose: number = 0


// main function
let get_value = function ()  {
    if (index % 2 == 0)  {
        // gives the asks user to state their name
        name_question()
        index += 1
    }
    // responsible for changing the background color
    color_change()
}

let name_question = function ()  {
    beginner.innerHTML = "What is your name?"
    compliment.innerHTML = `Hello ${entry.value}`
}

let color_change = function () {
    let r: number = Math.floor(Math.random() * 255)
    let g: number = Math.floor(Math.random() * 255)
    let b: number = Math.floor(Math.random() * 255)
    let color: string =`${r}, ${g}, ${b}`
    body.style.background = `rgb(${color})`
}


// adding event listeners
btn?.addEventListener("click", get_value)
