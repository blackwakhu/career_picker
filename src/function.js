// buttons elements
var name_btn = document.querySelector("#name_btn");
var level_btns = [
    {
        "btn": document.querySelector("#very_good"),
        "score": 4
    },
    {
        "btn": document.querySelector("#good"),
        "score": 3
    },
    {
        "btn": document.querySelector("#average"),
        "score": 2
    },
    {
        "btn": document.querySelector("#bad"),
        "score": 1
    },
    {
        "btn": document.querySelector("#very_bad"),
        "score": 0
    }
];
// Body element
var body = document.querySelector("body");
// paragraph elements
var beginner = document.querySelector("#beginner");
var compliment = document.querySelector("#compliment");
var name_p = document.querySelector("#name_p");
// entry elements
var name_inp = document.querySelector("#name_inp");
// div elements
var name_div = document.querySelector("#name_div");
var question_div = document.querySelector("#question_div");
var career_div = document.querySelector("#career_div");
// questions list
var questions = [
    "Rate your creativity?",
    "Rate your love for the outdoors?",
    "Are you willing to be helpful?",
    "Do you love to build new things?",
    "Do you consider yourself to be compassionate?",
    "Do you consider yourself to be empathetic?"
];
var career_dict = ["Doctor, Surgeon", "Computer Scientist, Engineer", "Teacher", "Scientist, Enviromentalist", "Pilot, Astronaut"];
// variables
var index = 0;
var score = 0;
var name_var = "";
// main function for the btn in the names div
var get_name = function () {
    name_p.innerHTML = "Hello ".concat(name_inp === null || name_inp === void 0 ? void 0 : name_inp.value);
    name_div.style.display = "none";
    question_div.style.display = "block";
    question_div.style.visibility = "visible";
    // for changing the background color
    color_change();
    // getting the first question in the list
    get_question();
};
var get_question = function () {
    if (index < questions.length) {
        beginner.innerHTML = questions[index];
        index += 1;
    }
    else {
        question_div.style.display = "none";
        career_div.style.display = "block";
        career_div.style.visibility = "visible";
        compliment.innerHTML = "you likely careeer prospects may include <br> ".concat(get_career());
    }
};
var color_change = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "".concat(r, ", ").concat(g, ", ").concat(b);
    body.style.background = "rgb(".concat(color, ")");
};
var get_career = function () {
    var avg = Math.floor(score / questions.length);
    return career_dict[avg];
};
// adding event listeners
name_btn === null || name_btn === void 0 ? void 0 : name_btn.addEventListener("click", get_name);
level_btns.forEach(function (btn) {
    var _a;
    (_a = btn.btn) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        color_change();
        score += btn.score;
        get_question();
    });
});
