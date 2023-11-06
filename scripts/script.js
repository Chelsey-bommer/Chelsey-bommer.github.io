/* Variabele aanmaken */
var Button = document.querySelector("nav");

Button.addEventListener("click", Menu);

function Menu () {
    
    Button.classList.toggle("responsive");
}