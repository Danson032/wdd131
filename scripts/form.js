const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}


const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

const productSelect = document.getElementById("product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (${product.averagerating}★)`;
        productSelect.appendChild(option);
    });
}


if (window.location.pathname.endsWith("review.html")) {

    let counter = localStorage.getItem("reviewCount") || 0;
    counter = parseInt(counter) + 1;
    localStorage.setItem("reviewCount", counter);

    const counterDiv = document.getElementById("reviewCounter");

    if (counterDiv) {
        counterDiv.textContent = `Total reviews submitted: ${counter}`;
    }
}

