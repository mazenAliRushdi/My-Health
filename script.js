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

  ScrollReveal().reveal(".about-image", {
    origin: "left",
    distance: "60px",
    duration: 800,
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
  });
  ScrollReveal().reveal(".about-content", {
    origin: "right",
    distance: "60px",
    duration: 800,
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
  });
  ScrollReveal().reveal(".about-values li", {
    origin: "bottom",
    distance: "20px",
    duration: 700,
    easing: "ease-out",
    delay: (index) => index * 150 + 500,
    reset: false,
    viewFactor: 0.2,
  });

  ScrollReveal().reveal(".doctors-grid .doctor-card", {
    origin: "bottom",
    distance: "40px",
    duration: 700,
    easing: "ease-out",
    delay: (index) => index * 200,
    reset: false,
    viewFactor: 0.2,
  });
  ScrollReveal().reveal(".doctors-cta", {
    scale: 0.9,
    duration: 700,
    easing: "ease-out",
    delay: 300,
    reset: false,
    viewFactor: 0.2,
  });

  ScrollReveal().reveal(".contact-form", {
    origin: "left",
    distance: "60px",
    duration: 800,
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
  });
  ScrollReveal().reveal(".contact-info", {
    origin: "right",
    distance: "60px",
    duration: 800,
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
  });

  const doctorSocialIcons = document.querySelectorAll(
    ".doctor-social .social-icon"
  );
  doctorSocialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "rotate(360deg) scale(1.2)";
      this.style.transition = "transform 0.4s ease-in-out";
    });
    icon.addEventListener("mouseleave", function () {
      this.style.transform = "rotate(0deg) scale(1)";
      this.style.transition = "transform 0.3s ease-in-out";
    });
  });
});
