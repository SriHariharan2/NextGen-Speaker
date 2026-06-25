// ==========================
// Counter Animation
// ==========================
const counters = document.querySelectorAll(".counter");

function animateCounters() {
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    let count = 0;
    const step = Math.ceil(target / 80);

    function update() {
      if (count < target) {
        count += step;
        counter.innerText = count;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    }

    update();
  });
}

if (counters.length > 0) {
  animateCounters();
}

// ==========================
// Scroll Fade Animation
// ==========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".card, .stat-box, .testimonial-card").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Inject animation styles
const style = document.createElement("style");
style.innerHTML = `
.hidden{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s ease;
}

.show{
  opacity:1;
  transform:translateY(0);
}
`;
document.head.appendChild(style);

// ==========================
// Scroll To Top Button
// ==========================
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

Object.assign(topBtn.style, {
  position: "fixed",
  right: "25px",
  bottom: "25px",
  width: "55px",
  height: "55px",
  border: "none",
  borderRadius: "50%",
  background: "#ff7a1a",
  color: "#fff",
  fontSize: "24px",
  cursor: "pointer",
  display: "none",
  zIndex: "999",
  boxShadow: "0 8px 24px rgba(0,0,0,.25)"
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});