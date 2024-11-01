// buttons elements
const name_btn = document.querySelector<HTMLButtonElement>("#name_btn")
const level_btns: {"btn": HTMLButtonElement, "score": number}[] = [
    {
        "btn": document.querySelector<HTMLButtonElement>("#very_good"), 
        "score": 5
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#good"), 
        "score": 4
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#average"), 
        "score": 3
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#bad"), 
        "score": 2
    },
    {
        "btn": document.querySelector<HTMLButtonElement>("#very_bad"),
        "score": 1
    }
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

// questions list
const questions: string[] = [
    "Rate your creativity?", 
    "Rate your love for the outdoors?", 
    "Are you willing to be helpful?", 
    "Do you love to build new things?", 
    "Do you consider yourself to be compassionate?",
    "Do you consider yourself to be empathetic?"
]


const career_dict: {"career": string[], "score": number}[] = [
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
let score: number = 0
let name_var:string = ""


// main function for the btn in the names div
let get_name = function ()  {
    name_p.innerHTML = `Hello ${name_inp?.value}`
    name_div.style.display = "none";
    question_div.style.display = "block";
    question_div.style.visibility = "visible";
    
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
        career_div.style.visibility = "visible";
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
    let avg:number = score / questions.length
    let career: string[]
    for (let i: number = 0; i < career_dict.length; i++){
        if (career_dict[i].score == avg)  {
            career = career_dict[i].career
            break
        }
    }
    return career
}

// adding event listeners
name_btn.addEventListener("click", get_name)

// for (let y: number = 0; y < level_btns.length; y++)  {
//     level_btns[y].btn.addEventListener("click", function ()  {
//         console.log(level_btns[y].btn.innerHTML)
//     })
// }


level_btns.forEach(function (btn)  {
    btn.btn.addEventListener("click", function ()  {
      console.log(btn.btn.innerHTML)  
    })
})