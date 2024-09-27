
/* Variabele aanmaken */
var Button = document.querySelector("nav button")

Button.addEventListener("click", Menu);

function Menu () {
    var MenuLijst = document.querySelector("nav ul");
    MenuLijst.classList.toggle("MenuAdd");
}

