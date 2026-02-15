const lessons = [
  {title:"HTML Basics", level:"beginner", length:2},
  {title:"CSS Fundamentals", level:"beginner", length:3},
  {title:"JavaScript Intro", level:"intermediate", length:4},
  {title:"DOM Manipulation", level:"intermediate", length:5}
];


function displayLessons(list) {
  const grid = document.querySelector("#lessonGrid");
  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(l =>
    grid.innerHTML += `
      <article>
        <h3>${l.title}</h3>
        <p>Level: ${l.level}</p>
        <p>Hours: ${l.length}</p>
      </article>
    `
  );
}

function filterLessons(level) {
  if (level === "all") {
    displayLessons(lessons);
  } else {
    const filtered = lessons.filter(l => l.level === level);
    displayLessons(filtered);
  }
}

function handleSignup() {
  const form = document.querySelector("#signupForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    localStorage.setItem("campName", name);

    document.querySelector("#welcome").textContent =
      `Welcome to Dan Code Camp, ${name}!`;
  });
}

function loadWelcome() {
  const saved = localStorage.getItem("campName");
  const box = document.querySelector("#welcome");

  if (saved && box) {
    box.textContent = `Welcome back, ${saved}!`;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  displayLessons(lessons);
  loadWelcome();
  handleSignup();

  document.querySelectorAll(".filters button").forEach(btn =>
    btn.addEventListener("click", () =>
      filterLessons(btn.dataset.level)
    )
  );

});
