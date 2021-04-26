console.log("first hello world application running correctly bItcHssssss");

function myfunctionsubmit() {
  var myul = document.getElementById("myul");
  var li = document.createElement("li");
  var inputValue = document.getElementById("mytext");
  li.innerText = inputValue.value;
  myul.appendChild(li);
  inputValue.value = "";
}

function loadhandler() {
  setSubmitButtonEventHandler();
}

function setSubmitButtonEventHandler() {
  var submitButton = document.getElementById("submit");
  submitButton.onclick = myfunctionsubmit;
}

window.addEventListener("load", loadhandler);
