const { log } = console;

export class Render {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }

  fetchData(URI, cb, options = {}) {
    fetch(URI, options)
      .then((res) => res.json())
      .then((data) => {
        if (!cb) {
          log(data);
          return null;
        }

        let itemsRenderizar = cb(data);
        this.#renderInContainer(itemsRenderizar);
        return;
      })
      .catch((error) => log({ error }));
  }
  #renderInContainer(items) {
    this.container.innerHTML = items;
  }
}
