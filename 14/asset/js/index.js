/*

Importar modulos
*/

import { respuesta, respuestaNegativa } from "./respuesta.js";
import { usuario, pass } from "./usuarios.js";
import { frutas } from "./frutas.js";

/**
 * TABLAS DE VERDAD   >>
 *  - AND   &&
 *  - OR    ||
 */

console.table({
  true_true: true && true,
  true_false: 19 > 8 && !(19 > 8),
  false_true: Boolean(0) && true,
  false_false: !true && "pepito" === "PEPITO",
});

console.table({
  true_true: true || true,
  true_false: 19 > 8 || !(19 > 8),
  false_true: Boolean(0) || true,
  false_false: !true || "pepito" === "PEPITO",
});

/**
 * CONDICIONALES
 */

/* document.body.innerHTML = */

/* let edad = prompt("ingrese su edad");
 */
/* let edadTransformada = isNaN(Number(edad)) ? -Infinity : Number(edad);
 */

/* if (18 <= edadTransformada) {
  document.body.innerHTML = respuesta;
  console.log(edadTransformada);
} else {
  console.log(edadTransformada);
  document.body.innerHTML = respuestaNegativa;
}
 */
/* 
let usuarioNombre = prompt("ingrese usuario");
let password = prompt("ingrese password"); */

/* if (usuarioNombre !== usuario) {
  document.body.innerHTML = respuestaNegativa;
} else if (password !== pass) {
  document.body.innerHTML = respuestaNegativa;
} else {
  document.body.innerHTML = respuesta;
}
 */

/* if (usuarioNombre === usuario && password === pass) {
  document.body.innerHTML = respuesta;
} else {
  console.log("che, este me esta queriendo hackear");
} */

/**
 * FOR
 */

/* for (let i = 0; i < 10; i++) {
  document.body.innerHTML += `<li> ${i} : ${frutas[i]}</li>`;
}
*/
let i = 1;

for (let frutita of frutas) {
  document.body.innerHTML += `<li> ${i++}  : ${frutita}</li>`;
}

/**
 * WHILE
 */

/* let usuarioNombre = prompt("ingrese usuario");
let password = prompt("ingrese password");

if (usuarioNombre === usuario && password === pass) {
  document.body.innerHTML = respuesta;
} else {
  console.log("che, este me esta queriendo hackear");
}
 */

/* let flag = true;
let cantidadVeces = 1;
let acc = 0;

while (flag && acc <= cantidadVeces) {
  let usuarioNombre = prompt("ingrese usuario");
  let password = prompt("ingrese password");

  if (usuarioNombre === usuario && password === pass) {
    document.body.innerHTML = respuesta;
    flag = false;
  } else {
    alert("has intentado ingresar, algo esta mal! ");
    acc++;
  }
}

if (flag) {
  document.body.innerHTML = JSON.stringify({
    error: 401,
    status: "no auth",
    msg: "rompiste algo cacho!",
  });
}
 */

let acc = 0;
const cantVeces = 2;

let usuarioNombre;
let password;

while (true && acc <= cantVeces) {
  usuarioNombre = prompt("ingrese usuario");
  password = prompt("ingrese password");

  if (usuarioNombre === usuario && password === pass) {
    console.log("estas???");
    document.body.innerHTML = respuesta;
    break;
  }

  console.log("cantidad de veces  ingresadas " + acc);
  console.log("has intentado ingresar, algo esta mal! ");
  acc++;
}

/*

  UN LOGIN 
  - PEDIRTE TU EMAIL
  - PASS

  MATCH ==> RENDER > BIENVENIDO nombre de usuario
  !MATCH => alert ("el password es incorrecto") si el pass es incorrecto
  !MATCH => alert("el email es incorrecto") si el email es incorrecto
  */
