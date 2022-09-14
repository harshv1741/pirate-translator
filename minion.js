// const message = document.getElementById("message");

const message = document.querySelector('#message');
var btnTranslate = document.querySelector('#translate');
var textOutput = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

// sending request to api to get the requeest
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error Occured" + error)
    alert("Something is wrong with api server! Please come again later....")
}

function clickHandler(){
    // textOutput.innerText=message.value;
    
    var textInput = message.value; // taking input 
    fetch(getTranslationURL(textInput))  // Sending the request
    .then(getResponse => getResponse.json()) // Getting Response in json file
    .then(getJson => {
        var translatedText = getJson.contents.translated;
        textOutput.innerText = translatedText;

    }) // getting only translated text from json file
    .catch(errorHandler)

    // server call for processing
};

// Handling click event
btnTranslate.addEventListener("click",clickHandler);
