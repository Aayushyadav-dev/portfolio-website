/* =========================
   SMOOTH SECTION SCROLL
========================= */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

/* =========================
   CONTACT REVEAL
========================= */
function showContact() {
  const info = document.getElementById("contactInfo");
  info.textContent = "📧 yadavajitaayush@gmail.com | 📞 +91 8302266821";
  info.style.opacity = "1";
}

/* =========================
   CUSTOM CURSOR (SMOOTH)
========================= */
const cursor = document.querySelector(".cursor");
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* =========================
   SCROLL REVEAL (OPTIMIZED)
========================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach(el => observer.observe(el));

/* =========================
   MAGNETIC BUTTONS (ELASTIC)
========================= */
document.querySelectorAll(".magnetic").forEach(btn => {
  let x = 0, y = 0;

  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x += (dx * 0.35 - x) * 0.2;
    y += (dy * 0.35 - y) * 0.2;

    btn.style.transform = `translate(${x}px, ${y}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/* =========================
   PAGE LOAD FADE-IN
========================= */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
/* =========================
   DARK / LIGHT MODE
========================= */
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});/* =========================
   SCROLL PROGRESS INDICATOR
========================= */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("scrollProgress").style.width = progress + "%";
});

