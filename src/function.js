"use strict";
// buttons elements
var btn = document.querySelector("#btn");
var name_btn = document.querySelector("#name_btn");
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
};
// main function for the btn in the questions div
var get_value = function () {
    if (index % 2 == 0) {
        // gives the asks user to state their name
        name_question();
        index += 1;
    }
    else {
        // function that deals with questions
        choose_function();
    }
    // responsible for changing the background color
    color_change();
};
var name_question = function () {
    beginner.innerHTML = "What is your name?";
    compliment.innerHTML = "Hello ".concat(entry.value);
};
var choose_function = function () {
    if (choose < questions.length) {
        // generates the questions
        question_reader();
        choose += 1;
    }
    else {
        // returns the career
        read_career();
        index += 1;
        choose = 0;
    }
};
var question_reader = function () {
    beginner.innerHTML = questions[choose];
    compliment.innerHTML = "Click the button to continue";
};
var read_career = function () {
    beginner.innerHTML = "Your career is ";
    compliment.innerHTML = careers[Math.floor(Math.random() * careers.length)];
};
var color_change = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "".concat(r, ", ").concat(g, ", ").concat(b);
    body.style.background = "rgb(".concat(color, ")");
};
// adding event listeners
btn.addEventListener("click", get_value);
name_btn.addEventListener("click", get_name);
