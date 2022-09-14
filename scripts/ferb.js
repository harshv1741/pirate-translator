// Declaring variables for accessing html elements.
const msg = document.querySelector("#msg");
var ferbLatin = document.querySelector('#myferb');
var output = document.querySelector('#output')

// The API we are going to form connection with.
var serverURL = "https://api.funtranslations.com/translate/pirate.json";

// Getting the translated text
function getTransUrl(txt){
    return serverURL + "?" + "text=" + txt;
}

// Handling the error.
function errorHandler(error){
    console.log("Error Occured " + error)
    alert("Something is wrong with api server! Please come again later....")
}

function clickEventHandler(){
    var userMsg = msg.value;
    fetch(getTransUrl(userMsg))
    .then(getResponse => getResponse.json())
    .then(getJson => {
        var translatedText = getJson.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
}


ferbLatin.addEventListener("click",clickEventHandler());