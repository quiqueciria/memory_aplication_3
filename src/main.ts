import {
  InterfaceNuevaCarta,
  InterfaceOriginalCarta,
  cartasArrayOriginal,
  tablero,
} from "./modelo";

// This load the function before of the HTML
document.addEventListener("DOMContentLoaded", () => {
  pintarTablero(barajarCartas(cartasArrayOriginal));
  console.log(tablero.estadoPartida);
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
      // Botón iniciar partida
      const botonIniciar = document.getElementById("iniciarPartidaButton");
      if (botonIniciar) {
        botonIniciar.addEventListener("click", () => {
          // Borrar si están pintadas las cartas
          tablero.estadoPartida = "CeroCartasLevantadas";
          divAnimal.innerHTML = " ";
          // console.log(tablero.estadoPartida);
          //Asignar el evento de click
          divAnimal.addEventListener("click", () => {
            if (tablero.estadoPartida === "CeroCartasLevantadas") {
              divAnimal.innerHTML = `<img src="${index.imagen}"/>`;
              tablero.estadoPartida = "UnaCartaLevantada";
              // console.log(tablero.estadoPartida);
              tablero.indiceCartaVolteadaA = index.idFoto;
              // console.log(tablero.indiceCartaVolteadaA);
            } else {
              divAnimal.innerHTML = `<img src="${index.imagen}"/>`;
              tablero.estadoPartida = "DosCartasLevantadas";
              // console.log(tablero.estadoPartida);
              tablero.indiceCartaVolteadaB = index.idFoto;
              console.log(tablero.indiceCartaVolteadaB);
              const indiceCartaA = tablero.indiceCartaVolteadaA;
              const indiceCartaB = tablero.indiceCartaVolteadaB;
              if (indiceCartaA === indiceCartaB) {
                console.log("son pareja");
                tablero.cartasDetalle[indiceCartaA].encontrada == true;
                tablero.cartasDetalle[indiceCartaB].encontrada == true;
                console.log(index);
              } else {
                console.log("NO SON");
                tablero.estadoPartida = "CeroCartasLevantadas";
                if (tablero.cartasDetalle[indiceCartaA].encontrada == false) {
                }
              }
            }
          });
        });
        // Con este console.log veo el array que se está pintando
        console.log(index);
      }
    });
  } else {
    console.error("No se encontró elemento");
  }
};
