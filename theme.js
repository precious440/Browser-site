
/* 
  This file handles the dark mode toggle for the site.
  It checks the user's saved preference and applies it automatically.
  It also allows the user to toggle the theme manually with a button.
*/

/* Function to toggle the dark mode on or off */
function toggleTheme() {
  /* toggle the dark class on the <body> element */
  document.body.classList.toggle('dark');

  /* this save the user's theme preference to local storage */
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

/* function to load the saved theme when the page loads */
window.addEventListener('DOMContentLoaded', () => {
  /* localStorage(light or dark) */
  const savedTheme = localStorage.getItem('theme');

  /* if it is dark, then it applies */
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});
