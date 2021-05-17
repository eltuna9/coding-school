var a = 8;
var b = 11;
var c = a + b;
console.log(c);
console.log(c * (b + a));

var baseball = "Baseball";
console.log(baseball + "is the best!");

function textFunction() {
  var testTest = "bleep bloop";
  console.log(testTest + " mfs");
}
textFunction();

//function printHtml() {
//var printHtml = document.getElementById("printHere");
//printHtml = innertext.value;
//}

//function printHtml
//document.getElementById("printHere")

function purpleBackground() {
  var colours = ["white", "green", "blue", "pink", "purple", "orange"];
  var changeColour = (document.body.style.backgroundColor = colours[4]);
  changeColour;
}

function makeButtonGo() {
  var purpleButton = document.getElementById("changeColour");
  purpleButton.onclick = purpleBackground();
}
var impact = (document.body.style.fontFamily = "Impact,Charcoal,sans-serif");
