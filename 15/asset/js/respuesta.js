export const getContainer = (containerID) =>
  document.getElementById(containerID);

export const response = (containerID) => {
  /*
    CLOSURE
    */
  let container = document.getElementById(containerID);

  return (respuesta) => (container.innerHTML = respuesta);
};
