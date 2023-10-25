// Esta es la nueva interface que necesitamos para nuestra app
export interface InterfaceNuevaCarta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

// Esta costante es la que hace la equivalencia entre el array original y el nuevo que quremos crear
const crearCartaInicial = (
  InterfaceNuevaCarta: InterfaceOriginalCarta
): InterfaceNuevaCarta => {
  return {
    idFoto: InterfaceNuevaCarta.idFoto,
    imagen: InterfaceNuevaCarta.imagen,
    estaVuelta: false,
    encontrada: false,
  };
};

// Esto es para crear la nueva colección de cartas y duplicarla
export const crearColeccionCartasInicial = (
  arrayOriginalCartas: InterfaceOriginalCarta[]
): InterfaceNuevaCarta[] => {
  const cartasTranformadas = arrayOriginalCartas.map((carta) => {
    return crearCartaInicial(carta);
  });
  return [...cartasTranformadas, ...cartasTranformadas];
};

// Este es el interface original que contiene los campos del array original
export interface InterfaceOriginalCarta {
  idFoto: number;
  imagen: string;
}

// Este es el array original del tipo interface original
export const arrayOriginalCartas: InterfaceOriginalCarta[] = [
  {
    idFoto: 0,
    imagen: "/src/imgs/1.png",
  },

  {
    idFoto: 1,
    imagen: "/src/imgs/2.png",
  },
  {
    idFoto: 2,
    imagen: "/src/imgs/3.png",
  },

  {
    idFoto: 3,
    imagen: "/src/imgs/4.png",
  },
  {
    idFoto: 4,
    imagen: "/src/imgs/5.png",
  },

  {
    idFoto: 5,
    imagen: "/src/imgs/6.png",
  },
];

let cartas: InterfaceNuevaCarta[] =
  crearColeccionCartasInicial(arrayOriginalCartas);
