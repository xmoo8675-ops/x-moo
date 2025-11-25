// script.js FINAL FIXED
(function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!hamburger || !mobileMenu) {
    console.warn("Hamburger atau mobileMenu tidak ditemukan. Periksa id di HTML.");
    return;
  }

  // Set initial accessibility state
  hamburger.setAttribute("aria-label", "Open menu");
  hamburger.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");

  function openMenu() {
    mobileMenu.classList.add("show");
    hamburger.classList.add("active");

    hamburger.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");

    // lock scroll
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("show");
    hamburger.classList.remove("active");

    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");

    // unlock scroll
    document.body.style.overflow = "";
  }

  // Toggle hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.contains("show") ? closeMenu() : openMenu();
  });

  // Close when clicking link inside menu
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.classList.contains("show")) return;
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close by ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("show")) {
      closeMenu();
    }
  });

  // Close on hash change (section navigation)
  window.addEventListener("hashchange", () => {
    if (mobileMenu.classList.contains("show")) closeMenu();
  });

})();