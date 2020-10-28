// id corresponde al parametro id, esta incluido en los objetos base y en el html
import parametrosEconomicos from "./parametrosEconomicos";
import calculos from "./calculos";
import cantidades from "./cantidades";
import $cl from "./pesoChileno";

function mostrarResultados(id) {
  const cuerpoDeTabla = document.getElementById("cuerpo-de-tabla");
  let template = "";

  parametrosEconomicos.map(function (parametros) {
    if (parametros.htmlId === id) {
      cantidades.map(function (cantidad) {
        template += `
            <tr>
              <td>${calculos(cantidad, parametros).trabajo}</th>
              <td>${calculos(cantidad, parametros).cantidad}</th>
              <td>${calculos(cantidad, parametros).talonarios()}</td>
              <td>${$cl(calculos(cantidad, parametros).precioDeVenta())}</td>
              <td>${$cl(calculos(cantidad, parametros).precioConIVA())}</td>
            </tr>
      `;
      });
    }
  });

  cuerpoDeTabla.innerHTML = template;
}

export default mostrarResultados;
