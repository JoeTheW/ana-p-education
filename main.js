document.addEventListener("DOMContentLoaded", () => {
  // Image Array Configuration
  const aboutImages = [
    "assets/images/01.jpg",
    "assets/images/02.jpg",
    "assets/images/03.jpg",
    "assets/images/05.jpg",
    "assets/images/09.jpg",
    "assets/images/10.jpg",
    "assets/images/11.jpg",
    "assets/images/12.jpg",
  ];

  const container = document.getElementById("about-slides-container");

  // Inject Swiper Slides
  if (container) {
    aboutImages.forEach((src) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img src="${src}" class="w-full h-full object-cover" alt="Gallery image">`;
      container.appendChild(slide);
    });
  }

  // Initialize Swiper
  new Swiper(".aboutSwiper", {
    grabCursor: true,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Secure Contact Info Injection (Anti-Scraper)
  const user = "placeholder.user";
  const domain = "example.com";
  const phoneVal = "+00 000 00 00 00";

  const emailLinks = document.querySelectorAll(".contact-email");
  const phoneLinks = document.querySelectorAll(".contact-phone");

  emailLinks.forEach((link) => {
    link.href = `mailto:${user}@${domain}`;
    link.textContent = `${user}@${domain}`;
  });

  phoneLinks.forEach((link) => {
    link.href = `tel:${phoneVal.replace(/\s/g, "")}`;
    link.textContent = phoneVal;
  });

  // Form Validation Logic
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const emailInput = contactForm.querySelector('input[type="email"]');
      const phoneInput = contactForm.querySelector('input[name="phone"]');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Relaxed phone regex for international flexibility
      const phoneRegex = /^[0-9\s\-\+\(\)\.]{7,30}$/;

      if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }

      // Only validate phone if the user actually typed something
      if (
        phoneInput.value.trim() !== "" &&
        !phoneRegex.test(phoneInput.value)
      ) {
        alert(
          "Please enter a valid phone number format (numbers, +, spaces, or parentheses).",
        );
        e.preventDefault();
        return;
      }
    });
  }

  // Lucide Icons & Copyright Year
  lucide.createIcons();
  const yearSpan = document.getElementById("copyright-line");
  if (yearSpan) yearSpan.textContent = `© ${new Date().getFullYear()} Ana P.`;
});
