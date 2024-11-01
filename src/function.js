var btn = document.querySelector("#btn");
var body = document.querySelector("body");
var beginner = document.querySelector("#beginner");
var compliment = document.querySelector("#compliment");
var questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"];
var index = 0;
var careers = ["doctor", "computer scientist", "teacher", "engineer", "scientist", "surgeon", "pilot", "enviromentalist", "model", "astronaught"];
var choose = 0;
var get_value = function () {
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
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", get_value);
