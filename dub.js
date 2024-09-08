const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.querySelector(".sign-in-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;
  
  // Here, you would typically send these credentials to your server
  console.log('Login attempt with:', username, password);
  
  // For demonstration purposes only:
  alert('Login attempt registered. In a real app, this would be validated on the server.');
});