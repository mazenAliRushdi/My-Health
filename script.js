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
});
