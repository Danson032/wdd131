document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

