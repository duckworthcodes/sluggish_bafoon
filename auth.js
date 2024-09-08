document.addEventListener('DOMContentLoaded', (event) => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const newVisitorContainer = document.getElementById('newVisitor');
    const returningUserContainer = document.getElementById('returningUser');

    loginBtn.addEventListener('click', () => {
        newVisitorContainer.style.display = 'none';
        returningUserContainer.style.display = 'block';
    });

    registerBtn.addEventListener('click', () => {
        newVisitorContainer.style.display = 'block';
        returningUserContainer.style.display = 'none';
    });

    // Optional: Adding event listener for form submission for additional validation or actions
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add any additional validation or actions here
        registerForm.submit();
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add any additional validation or actions here
        loginForm.submit();
    });
});
