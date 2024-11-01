// buttons elements
const name_btn: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#name_btn")
const career_btn: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#career_btn")
const level_btns: {"btn": HTMLButtonElement | null, "score": number}[] = [
    {
        "btn": document.querySelector<HTMLButtonElement>("#very_good"), 
        "score": 4
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#good"), 
        "score": 3
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#average"), 
        "score": 2
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#bad"), 
        "score": 1
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#very_bad"),
        "score": 0
    }
]

// Body element
const body: HTMLBodyElement | null = document.querySelector<HTMLBodyElement>("body")

// paragraph elements
const beginner: HTMLParagraphElement | null = document.querySelector<HTMLParagraphElement>("#beginner")
const compliment: HTMLParagraphElement | null = document.querySelector<HTMLParagraphElement>("#compliment")
const name_p: HTMLParagraphElement | null = document.querySelector<HTMLParagraphElement>("#name_p")

// entry elements
const name_inp: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#name_inp")

// div elements
const name_div: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#name_div")
const question_div: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#question_div")
const career_div: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#career_div")

// questions list
const questions: string[] = [
    "Rate your creativity?", 
    "Rate your love for the outdoors?", 
    "Are you willing to be helpful?", 
    "Do you love to build new things?", 
    "Do you consider yourself to be compassionate?",
    "Do you consider yourself to be empathetic?"
]


const career_dict: string[] = [ "Doctor, Surgeon", "Computer Scientist, Engineer", "Teacher", "Scientist, Enviromentalist", "Pilot, Astronaut"]

// variables
let index: number = 0
let score: number = 0


// main function for the btn in the names div
let get_name = function ()  {
    name_p.innerHTML = `Hello ${name_inp?.value}`
    name_inp.value = ""
    name_inp.innerHTML = ""
    name_div.style.display = "none";
    question_div.style.display = "block";
    score = 0
    index = 0
    
    // for changing the background color
    color_change()
    
    // getting the first question in the list
    get_question()
}

let get_question = function ()  {
    if (index < questions.length)  {
        beginner.innerHTML = questions[index]
        index += 1
    } else  {
        question_div.style.display = "none";
        career_div.style.display = "block";
        compliment.innerHTML = `you likely careeer prospects may include <br> ${get_career()}`
    }
}

let color_change = function () {
    let r: number = Math.floor(Math.random() * 255)
    let g: number = Math.floor(Math.random() * 255)
    let b: number = Math.floor(Math.random() * 255)
    let color: string =`${r}, ${g}, ${b}`
    body.style.background = `rgb(${color})`
}

let get_career = function ()  {
    let avg:number = Math.floor(score / questions.length)
    return career_dict[avg]
}

// adding event listeners
name_btn?.addEventListener("click", get_name)
career_btn?.addEventListener("click", function ()  {
    color_change()
    name_div.style.display = "block"
    career_div.style.display = "none"
    name_p.innerHTML = "What is your name?"
})

level_btns.forEach(function (btn)  {
    btn.btn?.addEventListener("click", function ()  {
        color_change()
        score += btn.score
        get_question()  
    })
})