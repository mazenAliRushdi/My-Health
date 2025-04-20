document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      mobileToggle.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top:
            targetElement.offsetTop -
            document.querySelector(".main-header").offsetHeight,
          behavior: "smooth",
        });

        if (mainNav.classList.contains("open")) {
          mainNav.classList.remove("open");
          mobileToggle.classList.remove("open");
        }
      }
    });
  });

  ScrollReveal().reveal(".redesigned-hero .hero-content", {
    origin: "bottom",
    distance: "50px",
    duration: 700,
    delay: 300,
    easing: "ease-out",
    reset: false,
  });
  ScrollReveal().reveal(".redesigned-hero .hero-image", {
    origin: "top",
    distance: "50px",
    duration: 700,
    delay: 500,
    easing: "ease-out",
    reset: false,
  });

  ScrollReveal().reveal(".section-title", {
    duration: 600,
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
  });

  ScrollReveal().reveal(".services-grid .service-item", {
    origin: "bottom",
    distance: "40px",
    duration: 700,
    easing: "ease-out",
    delay: (index) => index * 200,
    reset: false,
    viewFactor: 0.2,
  });
});
