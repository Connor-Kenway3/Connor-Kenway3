// 1. Typewriter Effect
const text = "Connor";
const speed = 150; 
let i = 0;

function typeWriter() {
    const typewriterElement = document.getElementById("typewriter");
    
    // Ensure it's empty on the very first character
    if (i === 0) {
        typewriterElement.innerHTML = "";
    }

    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onload = () => {
    setTimeout(typeWriter, 250); 
};