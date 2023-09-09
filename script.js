// Dark mode toggle
const body = document.querySelector('body');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
