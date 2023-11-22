const API_key = "6a79c5c5de99ebcc7f29b7c42dee794f"
const ciudad = 'Pinamar'

function getCoordinates(done){
    const coords = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},AR&appid=${API_key}`)
    coords
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

//La siguiente función permite obtener por consola las coordenadas de una obicación expecífica "const ciudad"
getCoordinates(data => {
    console.log(data);
})


function getWeather(done){

    const results = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-37.1099492&lon=-56.8539007&units=metric&appid=${API_key}`);

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getWeather(data => {
    const base = data.name;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity;

    // Inserto en el html las variables con los datos cargados desde la API
    document.getElementById('base-meteo').textContent = `${base}`;
    document.getElementById('temperatura').textContent = `${temperatura} °C`;
    document.getElementById('humedad').textContent = `${humedad} %`;

    console.log(data);
});