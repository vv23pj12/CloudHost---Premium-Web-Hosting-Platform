const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');
const themes = ['theme-blue', 'theme-purple', 'theme-green'];

menuToggle?.addEventListener('click', () => mainNav.classList.toggle('open'));

themeToggle?.addEventListener('click', () => {
  const body = document.body;
  const current = themes.find((theme) => body.classList.contains(theme)) || themes[0];
  const next = themes[(themes.indexOf(current) + 1) % themes.length];
  body.classList.remove(...themes);
  body.classList.add(next);
});
