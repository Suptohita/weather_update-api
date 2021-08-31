document.getElementById('search').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=ae867b549e569e53fd7e081266ffc15a`;
    document.getElementById('error').innerText = ''
    document.getElementById('show-update').innerHTML = ''

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => updateWeather(data))
        .catch(error => document.getElementById('error').innerHTML = `<h6 class="text-center px-5 text-warning">⚠ We need City or Country name to show you weather update.</h6>`)
});
function updateWeather(data) {
    const weather = document.getElementById('show-update');
    const temp = Math.ceil((data.main.temp) - 273)
    weather.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <h1>${data.name}</h1>
    <h3><span>${temp}</span>&deg;C</h3>
    <h1 class="lead">${data.weather[0].main}</h1>
    `;
}