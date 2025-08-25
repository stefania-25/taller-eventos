// Seleccionamos el div por su ID.
const divSaludo = document.getElementById("saludo");

// Agregamos un evento 'click' al div usando addEventListener.
divSaludo.addEventListener("click", function(event) {
  alert("Hola! soy el div");
});
