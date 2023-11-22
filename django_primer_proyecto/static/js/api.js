async function buscadata() {
    try {
        const contenedor = document.getElementById('contenedor-api');
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await respuesta.json();

        //Acá están todos los usuarios entregados por la API
        listaCompleta = data;
        

        muestraData(data, contenedor); // se pasa el contenedor como argumento
    } catch (error) {
        console.error('Se produjo un error:', error);
    }
}

function muestraData(data, container) {
    // Tomo solamente los primeros 3 resultados de la API
    const primerosTres = data.slice(0, 3);

    const userList = primerosTres.map(user => `<p>${user.name}</p>`).join('');
    container.innerHTML = `<h2>Últimas reservas:</h2>${userList}`;
}

document.addEventListener('DOMContentLoaded', buscadata);
