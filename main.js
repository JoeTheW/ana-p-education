const translations = {
  en: {
    hero_title:
      'Inspiring Learning, <span class="text-blue-600">Nurturing Growth</span>',
    hero_desc:
      '<span class="text-blue-600 font-semibold">Kaixo! Hola! Hello!</span> I\'m Ana, a dedicated educator with over 10 years of experience in Spain and the UK, specializing in multilingual development and nurturing care.',
    contact_btn: "Get in touch",
    learn_more_btn: "Learn More",
    about_me_title: "About Me",
    about_me_desc: "",
  },
  es: {
    hero_title:
      'Inspirando Aprendizaje, <span class="text-blue-600">Fomentando el Crecimiento</span>',
    hero_desc:
      '<span class="text-blue-600 font-semibold">¡Hola!</span> Soy Ana, una educadora dedicada...',
    contact_btn: "Contactar",
    learn_more_btn: "Aprender Más",
    about_me_title: "",
    about_me_desc: "",
  },
  eu: {
    hero_title:
      'Ikaskuntza Inspiratzen, <span class="text-blue-600">Hazkundea Elikatzen</span>',
    hero_desc:
      '<span class="text-blue-600 font-semibold">Kaixo!</span> Ana naiz, hezitzaile kementsua...',
    contact_btn: "Jarri harremanetan",
    learn_more_btn: "Ikasi gehiago",
    about_me_title: "",
    about_me_desc: "",
  },
};

// function setLanguage(lang) {
//   // Find elements with the data-i18n attribute
//   document.querySelectorAll("[data-i18n]").forEach((element) => {
//     const key = element.getAttribute("data-i18n");
//     element.innerHTML = translations[lang][key];
//   });

//   // Save choice to local storage for preferences
//   localStorage.setItem("preferredLanguage", lang);
// }

document.addEventListener("DOMContentLoaded", () => {
  // Translation
  // On Page Load: Check for saved language or default to English
  // const savedLang = localStorage.getItem("preferredLanguage") || "en";
  // setLanguage(savedLang);

  // Image Array Configuration
  const aboutImages = [
    "assets/images/01.jpg",
    "assets/images/16.jpg",
    "assets/images/03.jpg",
    "assets/images/05.jpg",
    "assets/images/06.jpg",
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
