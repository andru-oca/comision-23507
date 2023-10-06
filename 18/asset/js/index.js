const { log } = console;
log(document.getElementById("main"));

let i = 0;

setInterval(() => {
  const mensajes = ["hola", "mundo", "JS", "data"];
  document.title = mensajes[i];
  i++;
}, 2_000);

let header = document.getElementsByTagName("header")[0];
header.classList.add("mario");

let main = document.querySelector("body > main");
main.classList.add("vero");

let footer = document.querySelectorAll("[data-class='marcos']");
footer.forEach((nodo) => nodo.classList.add("marcos"));

header.innerHTML = "<h1>i ❤ JS</h1>".toUpperCase();

let input = document.createElement("input");

input.type = "number";
input.placeholder = "ingrese cubitos";
input.value = 200;
log(input);

log(header.children);

header.appendChild(input);

let btn = document.createElement("button");
btn.innerText = "Agregar";

header.appendChild(btn);

let cantidadCubitos = 0;

function crearCubitos() {
  let cubitosCreados = Array.from(main.children);
  log(cubitosCreados);
  cubitosCreados.forEach((cubito) => main.removeChild(cubito));

  let inputData = document.querySelector("header > input[type='number']");
  cantidadCubitos = inputData.valueAsNumber;
  let cubitos = [];

  for (let i = 0; i < cantidadCubitos; i++) {
    let cubito = document.createElement("div");

    if (i % 2 == 0) {
      cubito.classList.add("colorSilvia");
    } else {
      cubito.classList.add("colorJessica");
    }

    cubitos.push(cubito);
  }

  log(cubitos);

  cubitos.forEach((cubito) => main.appendChild(cubito));

  input.value = "";
}

function renderTicketsAlejo(ticket) {
  let containerDiv = document.createElement("div");
  containerDiv.style.backgroundColor = ticket.color_status;

  let p = document.createElement("p");
  p.innerText = ticket.sistema_operativo;

  let p2 = document.createElement("p");
  p2.innerHTML = `<code>${ticket.email}</code>`;

  [p, p2].forEach((p) => {
    p.classList.add("color");
    return containerDiv.appendChild(p);
  });
  return containerDiv;
}

function validador(dato) {
  if (0 < dato && dato < 100) {
    return true;
  }

  alert("es mucho el valor");
  return true;
}

// btn.addEventListener("click", crearCubitos);

const TOKEN = "ibc6kpjwf51zz6b9qd991l2psw9yaaed0ls6hycn";
const URL = "https://sheetdb.io/api/v1/d0vtlcfmzacuu";

function getTickets() {
  Array.from(main.children).forEach((cubito) => main.removeChild(cubito));

  let inputData = document.querySelector("header > input[type='number']");
  cantidadTickets = inputData.valueAsNumber;

  //validador

  if (validador(cantidadTickets)) return;

  let urlWithLimits = URL + `?limit=${cantidadTickets}`;
  inputData.value = "";

  fetch(urlWithLimits, {
    method: "GET",
    headers: { Authorization: `Bearer ${TOKEN}` },
  })
    .then((res) => res.json())
    .then((data) => {
      let listaTickets = data.map((ticket) => renderTicketsAlejo(ticket));
      listaTickets.forEach((ticket) => main.appendChild(ticket));
    })
    .catch((error) => {
      error;
    });
}

btn.addEventListener("click", getTickets);
