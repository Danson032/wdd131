const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

if (window.location.pathname.endsWith("review.html")) {
    let counter = localStorage.getItem("reviewCount") || 0;
    counter = parseInt(counter) + 1;
    localStorage.setItem("reviewCount", counter);
    const msg = document.createElement("p");
    msg.textContent = `Total reviews submitted: ${counter}`;
    document.body.appendChild(msg);
}
