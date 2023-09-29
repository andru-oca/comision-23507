import { Persona } from "./Persona.js";
import { User } from "./User.js";
const log = console.log;

/*
propiedades
{
    attr => datos
--------------------
    metodos => funcion
}
*/

let mario = {
  // attributes
  nombre: "M4rio",
  email: "mario@mail.com",
  idiomas: ["italiano", "ingles", "español", "cantones", 19],
  activo: true,
  documentacion: {
    dni: 79881723,
    le: "CE-98798",
    osde: "pepe-8798123-503",
  },

  //methods

  saludar(personaASaludar = "Desconocido!") {
    log("Hola! " + personaASaludar);
    log(`Hola! ${personaASaludar}`);
  },

  presentacion: function () {
    return `
    Hola! soy ${this.nombre}
    Mi email ${mario.email}
    ${this.documentacion.osde ?? "No tengo Osde"} // nullish coalescing
    `;
  },
};

log(mario);

const veronica = new Persona(
  "veronica",
  "vero@mail.com",
  ["python", "asm", "ruby", "golang"],
  { sancor: "LC-300" }
);

veronica.saludar();
log(veronica.presentacion());

// SUGAR SYNT CLASS

const leonardo = new User(
  "leo@mail.com",
  "leon4",
  "98718923kl13l12o38712j3lk1o8718jknnman8oayxucas@"
);

log(leonardo.email);
log(leonardo.showData());
log(leonardo.changeStatus());
log(leonardo.showData());

let javier = {
  userName: "EL_JAvi_tu_papá!",
  email: "jav@mail.com",
  status: false,
};

const javierUser = new User(javier);

log(javierUser.userName);
log(javierUser.pwd);
javierUser.setCbu("7162378618723687123");
log(javierUser);

log(javierUser.showData());

import { AndruFrameWork } from "./FrameWork.js";

const injector = new AndruFrameWork("injector");

let response = `
<center>
    <h1> SOY UN FRAMEWORK DE JS PARA FRONT!!!</h1>
</center>
`;

injector.response(response);

const validadorH1 = new AndruFrameWork("container");
validadorH1.validateNumbers();
