import { arrayOriginalCartas, InterfaceOriginalCarta } from "./modelo";

// This load the function before of the HTML
document.addEventListener("DOMContentLoaded", () => {
  pintarTablero(arrayOriginalCartas);
});

// This function is to create the container
const crearContenedor = (nombreClase: string): HTMLDivElement => {
  const listaAnimales = document.createElement("div");
  listaAnimales.className = "grid-container";
  listaAnimales.id = nombreClase;
  return listaAnimales;
};

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
