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

// PORTFOLIO LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const projectImages = document.querySelectorAll(".project-image img");

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

projectImages.forEach(function (image) {
  image.addEventListener("click", function () {
    openLightbox(image);
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});


// PROJECT CASE STUDIES

const caseStudyModal = document.getElementById("caseStudyModal");
const caseStudyBody = document.getElementById("caseStudyBody");
const caseStudyClose = document.getElementById("caseStudyClose");

const projectData = {
  zico: {
    title: "Zico Elite",
    category: "Social Media Design",
    image: "images/project-1.jpg",
    alt: "Zico Elite Bitcoin promotional flyer",
    overview: "A promotional flyer designed for Zico Elite to communicate its Bitcoin-related promotion through an engaging visual presentation.",
    objective: "Present the promotion clearly and capture the attention of the target audience.",
    approach: "A strong green colour direction was used to give the design a distinctive visual identity while keeping the promotional message noticeable.",
    decisions: [
      "Dark and light green shades formed the primary colour palette.",
      "Yellow and lemon accents were used to highlight important elements.",
      "Colour contrast helped establish visual hierarchy."
    ]
  },

  aysense: {
    title: "Shot By AySense",
    category: "Brand Promotion",
    image: "images/project-2.jpg",
    alt: "Shot By AySense photography service advertisement",
    overview: "A promotional design created to advertise the photography services offered by Shot By AySense.",
    objective: "Present the photography services in an attractive and professional way.",
    approach: "A bold visual direction was created using a dominant dark background and carefully positioned images.",
    decisions: [
      "Black served as the dominant colour.",
      "Yellow was used as an accent colour.",
      "Images were strategically positioned to create balance within the layout.",
      "The contrast between black and yellow helped important elements stand out."
    ]
  },

  valentine: {
    title: "Valentine",
    category: "Event Design",
    image: "images/project-3.jpg",
    alt: "Valentine promotional sales campaign design",
    overview: "A promotional design created to advertise a Valentine's event and communicate its sales offering.",
    objective: "Generate interest in the event, communicate the promotion and encourage potential attendees to take action.",
    approach: "A vibrant, occasion-inspired visual direction was used to capture the celebratory atmosphere of Valentine's.",
    decisions: [
      "A shiny red background established the dominant visual identity.",
      "White elements provided contrast and helped important information stand out.",
      "The colour treatment helped communicate the celebratory mood of the event."
    ]
  },

  janey: {
    title: "Janey Sweet Treats",
    category: "Advertising Design",
    image: "images/project-4.jpg",
    alt: "Janey Sweet Treats food and catering promotional design",
    overview: "A business promotional design created to showcase Janey Sweet Treats' food offerings and promote its catering and baking services.",
    objective: "Build awareness of the business and communicate its range of services to potential customers.",
    approach: "A food-focused visual presentation was used to make the business's offerings appealing and memorable.",
    decisions: [
      "Red was used as the background colour for the appetizer promotion.",
      "A bold cupcake image served as a major visual element.",
      "The prominent food imagery helped establish the design's focal point."
    ]
  }
};

function openCaseStudy(project) {
  const data = projectData[project];

  if (!data) {
    return;
  }

  caseStudyBody.innerHTML = `
    <div class="case-study-label">${data.category}</div>

    <h2>${data.title}</h2>

    <img
      src="${data.image}"
      alt="${data.alt}"
      class="case-study-image"
    >

    <h3>Project Overview</h3>
    <p>${data.overview}</p>

    <hr class="case-study-divider">

    <h3>Objective</h3>
    <p>${data.objective}</p>

    <hr class="case-study-divider">

    <h3>Design Approach</h3>
    <p>${data.approach}</p>

    <hr class="case-study-divider">

    <h3>Creative Decisions</h3>
    <ul>
      ${data.decisions.map(function (decision) {
        return `<li>${decision}</li>`;
      }).join("")}
    </ul>

    <div class="case-study-footer">
      TIMMY DESIGNS
    </div>
  `;

  caseStudyModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCaseStudy() {
  caseStudyModal.classList.remove("active");
  document.body.style.overflow = "";
}

const caseStudyButtons = document.querySelectorAll(".case-study-btn");

caseStudyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const project = button.dataset.project;
    openCaseStudy(project);
  });
});

caseStudyClose.addEventListener("click", closeCaseStudy);

caseStudyModal.addEventListener("click", function (event) {
  if (event.target === caseStudyModal) {
    closeCaseStudy();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeCaseStudy();
  }
});
