const sumar = function (a, b) {
  return a + b;
};

const sumaPotente = (...params) => {
  let total = 0;
  for (let value of params) {
    total += value;
  }
  return total;
};

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
  if (b == 0) {
    console.warn("zapallo, por que vas a dividir por cero?");
    return null;
  }

  return a / b;
};

function calculadora(cb, ...params) {
  // CALLBACKS
  return cb(...params);

  /*   if (action === "sumar") {
    return a + b;
  }

  if (action === "restar") {
    return a - b;
  }

  if (action === "multiplicar") {
    return a * b;
  }

  if (action === "dividir") {
    return a / b;
  }

  return null; */
}

export { calculadora, sumar, restar, dividir, multiplicar, sumaPotente };
