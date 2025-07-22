const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const text = document.querySelector('.text');
const words = ['Software Engineering Student', 'Full-Stack Developer', 'Award-Winning AI Project Leader', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        menu.classList.remove('active');
        toggle.classList.remove('active');
    });
});

function typewriter() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        text.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typewriter, 1000);
        } else {
            setTimeout(typewriter, 100);
        }
    } else {
        text.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typewriter, 500);
        } else {
            setTimeout(typewriter, 50);
        }
    }
}

typewriter();
