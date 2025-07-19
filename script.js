const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
});


document.querySelector('#theme-toggle').addEventListener('change', function (e) {
  document.body.classList.toggle('dark-mode', e.target.checked);
});


;




