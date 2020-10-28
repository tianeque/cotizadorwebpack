import parametrosEconomicosBase from "./parametrosEconomicosBase";

/*funcion que ajusta los gastos generales para cantidades bajas,
dado que los valores de precios para estas cantidades son muy elevados*/
const ajusteGastosGenerales = (cantidad) => {
  switch (cantidad) {
    case 50:
      return 10;
      break;
    case 100:
      return 35;
    case 150:
      return 70;
    default:
      return parametrosEconomicosBase.gastosGenerales;
      break;
  }
};

export default ajusteGastosGenerales;
