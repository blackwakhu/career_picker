const btn: HTMLDivElement | null = document.querySelector("#btn")
const body: HTMLBodyElement | null = document.querySelector("body")

let questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"]
let index: number = 0
let careers = ["doctor", "computer scientist", "teacher","engineer", "scientist","surgeon","pilot","enviromentalist","model","astronaught"]
let choose: number = 0


let get_value = function ()  {
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
btn?.addEventListener("click", get_value)
