const { log } = console;
const dbUser = []; // array ser accedido usando index

function User({ nombre, email, auth }) {
  this.nombre = nombre;
  this.email = email;
  this.auth = auth;
}

dbUser.push("Mario");
dbUser.push("Veronica");

dbUser.push(
  new User({
    nombre: "marcos",
    email: "marquitos_emoxito@mail.com",
    auth: {
      IAM: '!"#!"#!"#🅾"?',
    },
  })
);

dbUser.push(() => crypto.randomUUID());

/* let uuidFunction = dbUser[3]();

log(uuidFunction);
 */

/* log(dbUser.at(-1));

for (let item of dbUser) {
  log(item);
} */

const iteradorComun = (item) => log("soy esto: ", item);
const iteradorEficiente = function (item) {
  if (item != "Veronica") {
    log("no matchea");
    return;
  }
  log(item);
  return item;
};

dbUser.forEach(iteradorComun);
dbUser.forEach(iteradorEficiente);

let [uno, dos, ...objetos] = dbUser;

log(objetos);

log(dbUser.slice(1, 3));

/* let valorPopeado = dbUser.pop();

log(valorPopeado);
log(dbUser);
 */

log(dbUser.filter((i) => i != "Veronica"));

let metadataArray = dbUser.map((i) => i.length);

log(metadataArray);

function DevPower(num) {
  const cache = {};

  if (Object.keys(cache).includes(num)) {
    return cache[num];
  }

  let valorRetorno = num ** 10;
  cache[num] = valorRetorno;
  return valorRetorno;
}

sessionStorage.setItem(
  "credenciales",

  JSON.stringify({
    auth: crypto.randomUUID(),
    status: true,
  })
);

let cred = JSON.parse(sessionStorage.getItem("credenciales"));

log(cred.auth);

fetch("https://jsonplaceholder.typicode.com/users", {})
  .then((res) => res.json())
  .then((data) => log(data))
  .catch((e) => log({ e }));

// USO DE MI FW

import { Render } from "./Render.js";
import { veronicaSuperPower } from "./VeronicaSuperPower.js";

const app = new Render("app");

const JSON_LOCAL = "./asset/js/beers.json";
const API_URI = "https://api.sampleapis.com/beers/stouts";

app.fetchData(API_URI, veronicaSuperPower);
