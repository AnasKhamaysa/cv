// Progressive enhancement: the portfolio works even when JavaScript is disabled.
const root = document.documentElement;
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = document.querySelector('#themeIcon');
const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#siteNav');

function setTheme(theme) {
  root.classList.toggle('light', theme === 'light');
  themeIcon.textContent = theme === 'light' ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
}
let savedTheme = null;
try { savedTheme = localStorage.getItem('anas-portfolio-theme'); } catch (err) { /* Private browsing */ }
if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
themeToggle.addEventListener('click', () => {
  const nextTheme = root.classList.contains('light') ? 'dark' : 'light';
  setTheme(nextTheme);
  try { localStorage.setItem('anas-portfolio-theme', nextTheme); } catch (err) { /* Private browsing */ }
});

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
document.querySelector('#year').textContent = String(new Date().getFullYear());
