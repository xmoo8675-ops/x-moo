// ===== SLIDER =====
const track = document.querySelector(".slider-track");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

if (btnNext && btnPrev && track) {
  btnNext.addEventListener("click", () => { track.scrollLeft += 300; });
  btnPrev.addEventListener("click", () => { track.scrollLeft -= 300; });
}

// ===== HAMBURGER MENU =====
const burger = document.getElementById("hamburger");
const mobileDropdown = document.getElementById("mobileDropdown");
const mobileMenu = document.getElementById("mobileMenu");

// buka / tutup dropdown
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileDropdown.classList.toggle("active");
});

// tutup dropdown saat klik link
document.querySelectorAll("#mobileDropdown a").forEach(link => {
  link.addEventListener("click", () => {
    mobileDropdown.classList.remove("active");
    burger.classList.remove("active");
  });
});

// tutup menu saat klik link di mobileMenu
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    burger.classList.remove("active");
  });
});