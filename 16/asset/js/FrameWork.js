export class AndruFrameWork {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }

  response(HTML) {
    this.container.innerHTML = HTML;
    return null;
  }

  validateNumbers() {
    let regexp = /^[0-9]+$/;
    let value = this.container.innerText;
    let testing = regexp.test(value);

    testing
      ? console.log("Esta todo bien es numerico")
      : alert("hay algun dato mal!");
  }
}
