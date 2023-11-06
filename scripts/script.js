/* Variabele aanmaken */
var Button = document.querySelector("button")

Button.addEventListener("click", Menu);

function Menu () {
    var MenuLijst = document.querySelector("nav ul");
    MenuLijst.classList.toggle("MenuAdd");
}