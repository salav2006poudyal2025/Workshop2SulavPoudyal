const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
    navLinks.classList.toggle("open");
    const open = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", open);
    menuButton.innerHTML = open ? "✕" : "☰";
}

menuButton.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) toggleMenu();
    });
});

const scrollBar = document.createElement("div");
scrollBar.style.position = "fixed";
scrollBar.style.top = "0";
scrollBar.style.left = "0";
scrollBar.style.height = "5px";
scrollBar.style.background = "#ffcc00";
scrollBar.style.width = "0%";
scrollBar.style.zIndex = "9999";
document.body.appendChild(scrollBar);

window.addEventListener("scroll", () => {
    const top = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (top / height) * 100;
    scrollBar.style.width = percent + "%";
});

const contactForm = document.getElementById("contact-form");
const messageDiv = document.createElement("div");
messageDiv.style.marginTop = "10px";
messageDiv.style.fontSize = "16px";
contactForm.appendChild(messageDiv);

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("message");

    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
        messageDiv.style.color = "red";
        messageDiv.textContent = "❌ Please fill out all required fields.";
        return;
    }

    messageDiv.style.color = "green";
    messageDiv.textContent = "✅ Thank you! Your message has been sent.";
    contactForm.reset();
});

const hoverSound = document.getElementById("hover-sound");
const cards = document.querySelectorAll("[data-sound='hover']");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
