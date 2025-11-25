// script.js (GANTI SELURUH ISI DENGAN INI)
(function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!hamburger || !mobileMenu) {
    console.warn("Hamburger atau mobileMenu tidak ditemukan. Periksa id elemen di HTML.");
    return;
  }

  // accessibility initial state
  hamburger.setAttribute("aria-label", "Open menu");
  hamburger.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");

  function openMenu() {
    mobileMenu.classList.add("show");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll"); // kalau ada CSS .no-scroll untuk disable scroll
  }

  function closeMenu() {
    mobileMenu.classList.remove("show");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  // Toggle on click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (mobileMenu.classList.contains("show")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking any link inside mobileMenu
  mobileMenu.querySelectorAll("a[href^='#'], a").forEach(link => {
    link.addEventListener("click", () => {
      // small timeout so any anchor navigation starts after menu closed
      closeMenu();
    });
  });

  // Close when clicking outside menu (on the page)
  document.addEventListener("click", (e) => {
    if (!mobileMenu.classList.contains("show")) return;
    // if click target is not inside mobileMenu and not the hamburger, close
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("show")) {
      closeMenu();
    }
  });

  // Optional: close menu on navigation (hashchange) to ensure proper scroll
  window.addEventListener("hashchange", () => {
    if (mobileMenu.classList.contains("show")) closeMenu();
  });

  // safety: if CSS uses .active on hamburger to animate lines, keep it in sync
  // (we already toggle class 'active' in openMenu/closeMenu)
})();