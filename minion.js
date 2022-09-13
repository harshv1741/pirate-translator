// const message = document.getElementById("message");

var message = document.querySelector('#message');
var btnTranslate = document.querySelector('#translate');
var textOutput = document.querySelector('#output');

function clickHandler(){
    textOutput.innerText=message.value;
};

btnTranslate.addEventListener("click",clickHandler);