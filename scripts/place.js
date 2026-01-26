const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;


const temperature = 45;
const windSpeed = 10;

const windChillSpan = document.querySelector('#windchill');

function calculateWindChill(temp, speed) {
    return 35.74 + (0.6215 * temp) -
        (35.75 * Math.pow(speed, 0.16)) +
        (0.4275 * temp * Math.pow(speed, 0.16));
}

let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
}

windChillSpan.textContent = windChill;