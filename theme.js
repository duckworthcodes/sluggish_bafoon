document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const body = document.body;

    // Check saved theme preference from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.checked = savedTheme === 'light-mode';
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
