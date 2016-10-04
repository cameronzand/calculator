

var button     = document.getElementById("calculate-button");
var answerBox  = document.getElementById("answer");



var calculateNumbers = function () {
	var textBoxOne = document.getElementById("value-one");
	var textBoxTwo = document.getElementById("value-two");

	var sum = Number(textBoxOne.value) + Number(textBoxTwo.value);
    answerBox.innerHTML=sum; 
};



button.addEventListener("click", calculateNumbers);

