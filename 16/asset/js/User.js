export class User {
  static ip = "localhost";
  #cbu;

  constructor({ email, userName, pwd, status }) {
    this.email = email;
    this.userName = userName;
    this.pwd = pwd;
    this.status = status ?? true;
  }

  setCbu = function (cbu) {
    this.#cbu = cbu;
  };

  changeStatus = () => (this.status = !this.status);

  showData = function () {
    return `
    Hola soy ${this.userName} 
    Mi password es : ${this.pwd ?? "*******"}
    Mi status es ${this.status ? "🟢" : "🟡"}
    `;
  };
}
