const THEMES = { day: 'day', night: 'night' };
const root = document.documentElement;
const switchButtons = document.querySelectorAll('button[theme-switch]');
const names = Object.keys(THEMES);

function nextTheme() {
    return names[(names.indexOf(root.dataset.theme) + 1) % names.length];
}

switchButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const theme = nextTheme();
        root.dataset.theme = theme;
    });
});