

var button     = document.getElementById("calculate-button");
var answerBox  = document.getElementById("answer");



var calculateNumbers = function () {
	var textBoxOne = document.getElementById("value-one");
	var textBoxTwo = document.getElementById("value-two");

	Number(textBoxOne.value) + Number(textBoxTwo.value);

 
};

answerBox = function () {
  answerBox.innerHTML = "calculateNumbers";

};

button.addEventListener("click", calculateNumbers);

