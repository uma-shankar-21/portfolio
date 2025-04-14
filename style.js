document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, idx) => {
      el.style.animationDelay = `${idx * 0.3}s`;
    });
  });
  