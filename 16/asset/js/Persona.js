const { log } = console;

export function Persona(nombre, email, idiomas, documentacion, activo) {
  // attributes
  this.nombre = nombre;
  this.email = email;
  this.idiomas = idiomas;
  this.activo = activo;
  this.documentacion = documentacion;
}

Persona.prototype.saludar = function (personaASaludar = "Desconocido!") {
  log("Hola! " + personaASaludar);
  log(`Hola! ${personaASaludar}`);
};

Persona.prototype.presentacion = function () {
  return `
    Hola! soy ${this.nombre}
    Mi email ${this.email}
    ${this.documentacion.osde ?? "No tengo Osde"} // nullish coalescing
    `;
};
