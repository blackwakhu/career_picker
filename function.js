let btn = document.querySelector("#btn")
let questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"]
let index = 0
let careers = ["doctor", "computer scientist", "teacher","engineer", "scientist","surgeon","pilot","enviromentalist","model","astronaught"]
let choose = 0
let body = document.querySelector("body")



function get_value(){
    if (index%2 == 0){
        questionnare()
        index += 1
    }
    else{
        if(choose<questions.length){
            question_reader()
            choose += 1
        }
        else{
            read_career()
            index += 1
            choose = 0
        }
    }
    get_colorchange()
}

function questionnare(){
    document.querySelector("#beginner").innerHTML = "enter your name"
    document.querySelector("#compliment").innerHTML = "hello " + document.getElementById("entry").value
}

function question_reader(){
    document.querySelector("#beginner").innerHTML = get_question()
    document.querySelector("#compliment").innerHTML = "click on the button for more"
}

function get_question(){
    phrase = questions[choose]
    return phrase
}

function read_career(){
    document.querySelector("#beginner").innerHTML = "your career is"
    document.querySelector("#compliment").innerHTML = get_career()
}

function get_career(){
    return careers[Math.floor(Math.random()*careers.length)]
}

function get_colorchange(){
    r = random_color()
    g = random_color()
    b = random_color()
    let new_color = r+", "+g+", "+b;
    body.style.background = "rgb("+new_color+")"
}

function random_color(){
    return Math.floor(Math.random()*255)
}

btn.addEventListener("click", get_value)