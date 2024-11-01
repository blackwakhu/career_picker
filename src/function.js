var btn = document.querySelector("#btn");
var body = document.querySelector("body");
var questions = ["are you creative?", "do you love nature?", "are you into helping others?", "do you love to build new things?", "do you consider yourself to be compassionate?"];
var index = 0;
var careers = ["doctor", "computer scientist", "teacher", "engineer", "scientist", "surgeon", "pilot", "enviromentalist", "model", "astronaught"];
var choose = 0;
var get_value = function () {
    color_change();
};
var color_change = function () { };
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", get_value);
