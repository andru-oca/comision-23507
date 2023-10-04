export function veronicaSuperPower(data) {
  let item;
  let items = "";

  if (!data) {
    console.log("no hay data papu");
    return;
  }

  data.forEach((cervecita) => {
    let pattern = `
        <div>
            <img src="${cervecita.image}" alt="${cervecita.name}">
            <div>
            <h2>precio : ${cervecita.price}</h2>
            <p>${cervecita.name}</p>
            </div>
        </div>
        `;
    items += pattern;
  });

  return items;
}
