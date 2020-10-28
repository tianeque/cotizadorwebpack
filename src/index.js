import "./main.css";
import precios5x1 from "./precios5x1";
import parametrosEconomicosBase from "./parametrosEconomicosBase";
import cantidades from "./cantidades";
import ajusteGastosGenerales from "./ajusteGastosGenerales";
import parametrosEconomicos from "./parametrosEconomicos";
import $cl from "./pesoChileno";
import calculos from "./calculos";
import mostrarResultados from "./mostrarResultados";
//por actualizacion de precios se modificará el parameto gastosGenerales de 60 a 80

// cantidad es un integer
// parámetros es un objeto

function mostrarResultados5x1(id) {
  const cuerpoDeTabla = document.getElementById("cuerpo-de-tabla");
  let template = "";
  precios5x1.map(function (precio) {
    if (precio.htmlId === id) {
      template += `
        <tr>
          <td>${precio.producto}</th>
          <td>${precio.cantidad}</th>
          <td>${precio.cantidad / 250}</td>
          <td>${parseInt(precio.precio / 1.19)}</td>
          <td>${precio.precio}</td>
        </tr>
      `;
    }
  });

  cuerpoDeTabla.innerHTML = template;
}

// Manipulacion de eventos click de la barra lateral
document
  .getElementById("boletas-1-2-carta")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("boletas-1-2-carta").id);
  });

document
  .getElementById("boletas-1-4-carta")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("boletas-1-4-carta").id);
  });

document
  .getElementById("formularios-carta")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("formularios-carta").id);
  });

document
  .getElementById("formularios-1-2-carta")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("formularios-1-2-carta").id);
  });

document
  .getElementById("formularios-1-4-carta")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("formularios-1-4-carta").id);
  });

document
  .getElementById("formularios-oficio")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("formularios-oficio").id);
  });

document
  .getElementById("formularios-1-2-oficio")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("formularios-1-2-oficio").id);
  });

document
  .getElementById("formularios-1-4-oficio")
  .addEventListener("click", function (event) {
    mostrarResultados(document.getElementById("formularios-1-4-oficio").id);
  });

document
  .getElementById("boletas-5x1")
  .addEventListener("click", function (event) {
    mostrarResultados5x1(document.getElementById("boletas-5x1").id);
  });

document
  .getElementById("boletas-5x1-aut")
  .addEventListener("click", function (event) {
    mostrarResultados5x1(document.getElementById("boletas-5x1-aut").id);
  });
