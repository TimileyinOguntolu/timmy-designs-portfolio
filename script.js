const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Open and close the mobile navigation
menuToggle.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("open");

  // Transform hamburger into X
  menuToggle.classList.toggle("open", isOpen);

  // Update accessibility attributes
  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close menu when a navigation link is clicked
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
  ".section-header, .project-card, .about-content, .contact-content"
);

const revealObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(function (element) {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  preloader.classList.add("hide");
});