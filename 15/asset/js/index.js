/*
DECLARANDO FUNCION

function <name_function>(params){
    let pepe ="Jose"
    var globalVar = ""

    return 
}

const pepe = function(){
    return "jose"
} 


// arrow functions

const pepe = ()=>"jose"

*/

// PRIMERA CALCULADORA

import {
  calculadora,
  sumar,
  restar,
  dividir,
  multiplicar,
  sumaPotente,
} from "./calculadora.js";

import { getContainer, response } from "./respuesta.js";
import { leapyear } from "./leapYear.js";

let valorTotal = calculadora(restar, 1, 2, 2, 3, 4, 5);
console.log(valorTotal);

// USAR UN INPUT => QUE NOS PERMITA SABER SI UN AÑO ES BISIESTO
// IMPRIMIR EN EL HTML

let inputData = getContainer("year");
let containerRespuesta = response("response");

inputData.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let bisiesto = leapyear(inputData.valueAsNumber);

    containerRespuesta(
      bisiesto
        ? "<h3> ES BISIESTO! ALEGRIA POR QUE FEBRERO ES VACACIONES</h3>"
        : "<h3> NO ES BISIESTO! Uh! </h3>"
    );
  }
});
