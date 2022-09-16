// Declaring variables for accessing html elements.
const msg = document.querySelector("#msg");
var arrgh = document.querySelector("#arrgh");
var output = document.querySelector("#output");

// The API we are going to form connection with.
var serverURL = "https://api.funtranslations.com/translate/pirate.json";

// Getting the translated text
function getTransUrl(text) {
  return serverURL + "?" + "text=" + text;
}

// Handling the error.
function errorHandler(error) {
  console.log("Error Occured" + error);
  alert("Something is wrong with api server! Please come again later....");
}

function clickEventHandler() {
  var userMsg = msg.value;
  fetch(getTransUrl(userMsg))
    // Using getResponse to get the json file from the server
    .then((getResponse) => getResponse.json())
    // Using getJson to access the translated text
    .then((getJson) => {
      var translatedText = getJson.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}

arrgh.addEventListener("click", clickEventHandler);
