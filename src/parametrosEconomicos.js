import parametrosEconomicosBase from "./parametrosEconomicosBase";

// const tamañoBase = (trabajo) => {
//   if (trabajo.includes("Carta") === true) {
//     return "carta";
//   } else if (trabajo.includes("Oficio") === false) {
//     return "oficio";
//   } else {
//     return null;
//   }
// };

// const costoResma = (tamañoBase) => {
//   const costoresmacarta = {
//     costoresma: parametrosEconomicosBase.costoresmacarta,
//   };
//   const costoresmaoficio = {
//     costoresma: parametrosEconomicosBase.costoresmaoficio,
//   };

//   if (tamañoBase === "carta") {
//     return costoresmacarta;
//   } else if (tamañoBase === "oficio") {
//     return costoresmaoficio;
//   }
// };

const parametrosComunesCarta = {
  gastosGenerales: parametrosEconomicosBase.gastosGenerales,
  utilidad: parametrosEconomicosBase.utilidad,
  impuesto: parametrosEconomicosBase.impuesto,
  hojasresma: parametrosEconomicosBase.hojasresma,
  costoresma: parametrosEconomicosBase.costoresmacarta,
  costotinta: parametrosEconomicosBase.costotinta,
  alzado: true,
  separado: true,
  corcheteado: true,
  corte: true,
  perforado: true,
  pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
  pagoAlzado: parametrosEconomicosBase.pagoAlzado,
  pagoImpresion: parametrosEconomicosBase.pagoImpresion,
};

const parametrosComunesOficio = {
  gastosGenerales: parametrosEconomicosBase.gastosGenerales,
  utilidad: parametrosEconomicosBase.utilidad,
  impuesto: parametrosEconomicosBase.impuesto,
  hojasresma: parametrosEconomicosBase.hojasresma,
  costoresma: parametrosEconomicosBase.costoresmaoficio,
  costotinta: parametrosEconomicosBase.costotinta,
  alzado: true,
  separado: true,
  corcheteado: true,
  corte: true,
  perforado: true,
  pagoOperacionesMenores: parametrosEconomicosBase.pagoOperacionesMenores,
  pagoAlzado: parametrosEconomicosBase.pagoAlzado,
  pagoImpresion: parametrosEconomicosBase.pagoImpresion,
};

const parametrosEconomicos = [
  {
    htmlId: "boletas-1-4-carta",
    trabajo: "boletas 1/4 Carta",
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "boletas-1-2-carta",
    trabajo: "boletas 1/2 Carta",
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-carta",
    trabajo: "Formularios Carta Duplicados",
    moldes: 1,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-carta",
    trabajo: "Formularios Carta Triplicados",
    moldes: 1,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-carta",
    trabajo: "Formularios Carta Cuadruplicados",
    moldes: 1,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-1-2-carta",
    trabajo: "Formularios 1/2 Carta Duplicados",
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-1-2-carta",
    trabajo: "Formularios 1/2 Carta Triplicados",
    moldes: 2,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-1-2-carta",
    trabajo: "Formularios 1/2 Carta Cuadruplicados",
    moldes: 2,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-1-4-carta",
    trabajo: "Formularios 1/4 Carta Duplicados",
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-1-4-carta",
    trabajo: "Formularios 1/4 Carta Triplicados",
    moldes: 4,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-1-4-carta",
    trabajo: "Formularios 1/4 Carta Cuadruplicados",
    moldes: 4,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesCarta,
  },
  {
    htmlId: "formularios-oficio",
    trabajo: "Formularios Oficio Duplicados",
    moldes: 1,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-oficio",
    trabajo: "Formularios Oficio Triplicados",
    moldes: 1,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-oficio",
    trabajo: "Formularios Oficio Cuadruplicados",
    moldes: 1,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-1-2-oficio",
    trabajo: "Formularios 1/2 Oficio Duplicados",
    moldes: 2,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-1-2-oficio",
    trabajo: "Formularios 1/2 Oficio Triplicados",
    moldes: 2,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-1-2-oficio",
    trabajo: "Formularios 1/2 Oficio Cuadruplicados",
    moldes: 2,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-1-4-oficio",
    trabajo: "Formularios 1/4 Oficio Duplicados",
    moldes: 4,
    multiplicidad: 2,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-1-4-oficio",
    trabajo: "Formularios 1/4 Oficio Triplicados",
    moldes: 4,
    multiplicidad: 3,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
  {
    htmlId: "formularios-1-4-oficio",
    trabajo: "Formularios 1/4 Oficio Cuadruplicados",
    moldes: 4,
    multiplicidad: 4,
    sobrantes: 10,
    untal: 50,
    diseno: 1000,
    ...parametrosComunesOficio,
  },
];

export default parametrosEconomicos;
