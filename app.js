let parrafo = document.getElementById("parrafo");
let boton = document.getElementById("boton");
let colorHex = "0123456789ABCDEF";
let cuerpo = document.getElementById("body");



boton.addEventListener("click", () => {
  let numHex = "#";
 for (let i = 0; i < 6; i++) {
    numHex += colorHex[numAleatorio()];
  }
  parrafo.innerText = numHex;
  cuerpo.style.backgroundColor = numHex;
  boton.style.backgroundColor = numHex;
});



function numAleatorio() {
  let numeroGenerado =  Math.floor(Math.random()*16);
  return numeroGenerado;
}

