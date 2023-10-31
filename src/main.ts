import {
  InterfaceNuevaCarta,
  InterfaceOriginalCarta,
  // arrayOriginalCartas,
  cartasArrayOriginal,
} from "./modelo";

// This load the function before of the HTML
document.addEventListener("DOMContentLoaded", () => {
  pintarTablero(cartasArrayOriginal);
});

// This function is to create the container
const crearContenedor = (nombreClase: string): HTMLDivElement => {
  const listaAnimales = document.createElement("div");
  listaAnimales.className = "grid-container";
  listaAnimales.id = nombreClase;
  return listaAnimales;
};

const barajarCartas = (cartasArrayOriginal: InterfaceNuevaCarta[]) => {
  let arrayCopy = [...cartasArrayOriginal];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};
// Ese console.log es solo para saber que funciona barajar cartas
console.log(barajarCartas(cartasArrayOriginal));

// To paint the board
const pintarTablero = (listaAnimales: InterfaceOriginalCarta[]): void => {
  // Select the div in the HTML
  const appDiv = document.getElementById("principal");
  // Creo el primer container
  if (appDiv && appDiv instanceof HTMLDivElement) {
    const crearDivAnimales = crearContenedor("animales");
    appDiv.appendChild(crearDivAnimales);
    // Creo el item dentro del container
    listaAnimales.forEach((index) => {
      const divAnimal = crearContenedor("animal");
      divAnimal.className = "grid-item";
      divAnimal.id = `${index}`;
      crearDivAnimales.appendChild(divAnimal);
      //Asignar el evento de click
      divAnimal.addEventListener("click", () => {
        divAnimal.innerHTML = `<img src="${index.imagen}"/>`;
      });
    });
  } else {
    console.error("No se encontró elemento");
  }
};

// Botón iniciar partida
const botonIniciar = document.getElementById("iniciarPartidaButton");

if (botonIniciar) {
  botonIniciar.addEventListener("click", () => {
    pintarTablero;
  });
}
