document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const errorMsg = document.getElementById("formError");
    const successMsg = document.getElementById("formSuccess");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        errorMsg.textContent = "";
        successMsg.textContent = "";

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const city = document.getElementById("city").value.trim();
        const budget = document.getElementById("budget").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !city || !budget || !message) {
            errorMsg.textContent = "❌ Please fill all fields.";
            return;
        }

        successMsg.textContent = "✔ Form submitted successfully!";
    });
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


