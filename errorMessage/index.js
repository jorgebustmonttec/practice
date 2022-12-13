// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let par=document.getElementById("error");

function errorFunc(){
    par.innerText="Something went wrong, please try again";
}