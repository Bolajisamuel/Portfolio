// 1. Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a link (mobile)
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// 2. Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// 3. Contact form validation
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

function showError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.classList.toggle("is-invalid", message !== "");
  input.setAttribute("aria-invalid", message !== "");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  status.textContent = "";

  const name = form.elements["name"];
  const email = form.elements["email"];
  const message = form.elements["message"];
  let valid = true;

  if (name.value.trim() === "") {
    showError(name, "Please enter your name.");
    valid = false;
  } else {
    showError(name, "");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    showError(email, "Please enter a valid email address.");
    valid = false;
  } else {
    showError(email, "");
  }

  if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters.");
    valid = false;
  } else {
    showError(message, "");
  }

  if (valid) {
    // No backend yet: this only simulates sending
    status.textContent = "Thank you, " + name.value.trim() + ". Your message was received.";
    form.reset();
  }
});