// buttons elements
// const btn = document.querySelector<HTMLButtonElement>("#btn")
var name_btn = document.querySelector("#name_btn");
var level_btns = [
    document.querySelector("#very_good"),
    document.querySelector("#good"),
    document.querySelector("#average"),
    document.querySelector("#bad"),
    document.querySelector("#very_badd")
];
// Body element
var body = document.querySelector("body");
// paragraph elements
var beginner = document.querySelector("#beginner");
var compliment = document.querySelector("#compliment");
var name_p = document.querySelector("#name_p");
// entry elements
var entry = document.querySelector("#entry");
var name_inp = document.querySelector("#name_inp");
// div elements
var name_div = document.querySelector("#name_div");
var question_div = document.querySelector("#question_div");
var career_div = document.querySelector("#career_div");
var questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"];
var careers = ["doctor", "computer scientist", "teacher", "engineer", "scientist", "surgeon", "pilot", "enviromentalist", "model", "astronaught"];
var career_dict = [
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
        "career": [
            "Pilot", "Astronaut"
        ],
        "score": 5
    }
];
// variables
var index = 0;
var choose = 0;
var score = 0;
var name_var = "";
// main function for the btn in the names div
var get_name = function () {
    name_p.innerHTML = "Hello ".concat(name_inp.value);
    name_div.style.display = "none";
    question_div.style.display = "block";
    question_div.style.visibility = "visible";
    // for changing the background color
    color_change();
};
var color_change = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "".concat(r, ", ").concat(g, ", ").concat(b);
    body.style.background = "rgb(".concat(color, ")");
};
// adding event listeners
name_btn.addEventListener("click", get_name);
