const phrases = ["Frontend Developer", "Software Engineer"];
let i = 0, j = 0, isDeleting = false;
const typedText = document.getElementById("typed-text");

function type() {
  const current = phrases[i];
  typedText.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 120);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}
type();

document.querySelectorAll('.fade-in').forEach(el => {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }).observe(el);
});

document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};
