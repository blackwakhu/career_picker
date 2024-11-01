"use strict"

// buttons elements
const btn: HTMLButtonElement = document.querySelector("#btn")
const name_btn: HTMLButtonElement = document.querySelector("#name_btn")

// Body element
const body: HTMLBodyElement  = document.querySelector("body")

// paragraph elements
const beginner: HTMLParagraphElement = document.querySelector("#beginner")
const compliment: HTMLParagraphElement = document.querySelector("#compliment")
const name_p: HTMLParagraphElement = document.querySelector("#name_p")

// entry elements
const entry: HTMLInputElement = document.querySelector("#entry")
const name_inp: HTMLInputElement = document.querySelector("#name_inp")

// div elements
const name_div: HTMLDivElement = document.querySelector("#name_div")
const question_div: HTMLDivElement = document.querySelector("#question_div")
const career_div: HTMLDivElement = document.querySelector("#career_div")

const questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"]
const careers = ["doctor", "computer scientist", "teacher","engineer", "scientist","surgeon","pilot","enviromentalist","model","astronaught"]

// variables
let index: number = 0
let choose: number = 0
let score: number = 0
let name_var:string = ""


// main function for the btn in the names div
let get_name = function ()  {
    name_p.innerHTML = `Hello ${name_inp.value}`
    name_div.style.display = "none";
    question_div.style.display = "block";
    question_div.style.visibility = "visible";
}

// main function for the btn in the questions div
let get_value = function ()  {
    if (index % 2 == 0)  {
        // gives the asks user to state their name
        name_question()
        index += 1
    } else  {
        // function that deals with questions
        choose_function()
    }
    // responsible for changing the background color
    color_change()
}

let name_question = function ()  {
    beginner.innerHTML = "What is your name?"
    compliment.innerHTML = `Hello ${entry.value}`
}

let choose_function = function ()  {
    if (choose < questions.length)  {
        // generates the questions
        question_reader()
        choose += 1
    } else  {
        // returns the career
        read_career()
        index += 1 
        choose = 0
    }
}

let question_reader = function () {
    beginner.innerHTML = questions[choose]
    compliment.innerHTML = "Click the button to continue"
}

let read_career = function ()  {
    beginner.innerHTML = "Your career is "
    compliment.innerHTML = careers[Math.floor(Math.random() * careers.length)]
}

let color_change = function () {
    let r: number = Math.floor(Math.random() * 255)
    let g: number = Math.floor(Math.random() * 255)
    let b: number = Math.floor(Math.random() * 255)
    let color: string =`${r}, ${g}, ${b}`
    body.style.background = `rgb(${color})`
}


// adding event listeners
btn.addEventListener("click", get_value)
name_btn.addEventListener("click", get_name)
