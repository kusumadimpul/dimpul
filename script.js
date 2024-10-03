document.addEventListener("click", function () {
  const links = document.querySelectorAll(".lefttopnav li a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      //event.preventDefault();

      links.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation (you can replace this with actual authentication logic)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page, e.g., dashboard.html
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
