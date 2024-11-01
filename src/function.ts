// buttons elements
// const btn = document.querySelector<HTMLButtonElement>("#btn")
const name_btn = document.querySelector<HTMLButtonElement>("#name_btn")
const level_btns = [
    document.querySelector<HTMLButtonElement>("#very_good"),
    document.querySelector<HTMLButtonElement>("#good"),
    document.querySelector<HTMLButtonElement>("#average"),
    document.querySelector<HTMLButtonElement>("#bad"),
    document.querySelector<HTMLButtonElement>("#very_badd")
]

// Body element
const body = document.querySelector<HTMLBodyElement>("body")

// paragraph elements
const beginner = document.querySelector<HTMLParagraphElement>("#beginner")
const compliment = document.querySelector<HTMLParagraphElement>("#compliment")
const name_p = document.querySelector<HTMLParagraphElement>("#name_p")

// entry elements
const entry = document.querySelector<HTMLInputElement>("#entry")
const name_inp = document.querySelector<HTMLInputElement>("#name_inp")

// div elements
const name_div = document.querySelector<HTMLDivElement>("#name_div")
const question_div = document.querySelector<HTMLDivElement>("#question_div")
const career_div = document.querySelector<HTMLDivElement>("#career_div")

const questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"]
const careers = ["doctor", "computer scientist", "teacher","engineer", "scientist","surgeon","pilot","enviromentalist","model","astronaught"]

const career_dict = [
    {
        "career": [
            "Doctor", "Surgeon"
        ],
        "score": 1,
    }, 
    {
        "career": [
            "Computer Scientist", "Engineer"
        ],
        "score": 2
    },
    {
        "career": [
            "Teacher"
        ],
        "score": 3
    },
    {
        "career": [
            "Scientist", "Enviromentalist"
        ],
        "score": 4
    }, 
    {},
    {
        "career":
        [
            "Pilot", "Astronaut"
        ],
        "score": 5
    }
]


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
    // for changing the background color
    color_change()
}

let color_change = function () {
    let r: number = Math.floor(Math.random() * 255)
    let g: number = Math.floor(Math.random() * 255)
    let b: number = Math.floor(Math.random() * 255)
    let color: string =`${r}, ${g}, ${b}`
    body.style.background = `rgb(${color})`
}


// adding event listeners
name_btn.addEventListener("click", get_name)
