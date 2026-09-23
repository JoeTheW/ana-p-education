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
    "assets/images/16.jpg",
    "assets/images/03.jpg",
    "assets/images/05.jpg",
    "assets/images/06.jpg",
    "assets/images/09.jpg",
    "assets/images/10.jpg",
    "assets/images/19.jpg",
    "assets/images/11.jpg",
    "assets/images/12.jpg",
    "assets/images/18.jpg",
    "assets/images/21.jpg",
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

  // ---------- Testimonials (data-driven) ----------
  const testimonials = [
    {
      name: "Rachel",
      initial: "R",
      shortQuote:
        "We had a wonderful experience with Ana while visiting San Sebastián. She was warm, reliable, and immediately made our girls feel comfortable and at ease. As parents traveling...",
      fullQuote:
        "We had a wonderful experience with Ana while visiting San Sebastián. She was warm, reliable, and immediately made our girls feel comfortable and at ease. As parents traveling in another country, it gave us so much peace of mind knowing they were happy and well cared for. We would absolutely recommend Ana to other families visiting San Sebastián!",
    },
    {
      name: "Charlie and Sarah",
      initial: "C&S",
      shortQuote:
        "We spent the summer in San Sebastián with our 3 year old and our 4 month old, and our trip wouldn't have been the same without Ana. Ana is the most amazing nanny we have ever worked with...",
      fullQuote:
        "We spent the summer in San Sebastián with our 3 year old and our 4 month old, and our trip wouldn't have been the same without Ana. Ana is the most amazing nanny we have ever worked with. It felt like our daughter got a nursery school teacher all to herself. Ana would come in for the day with a detailed plan of adventures for them to do, and she would often have art projects that she created for her from scratch. She 3D printed a puzzle that spelled her name, and she created a personalized coloring and scrap book that they took with them everywhere on their adventures. Ana sometimes watched the baby as well and managed both kids easily. She went far beyond the call of duty, and helped our toddler manage a big transition and thrive during our time there. She became a part of our family, and is one of the parts of San Sebastián I miss most now that we're back. Anyone would be lucky to work with her.",
    },
    {
      name: "Carrie",
      initial: "C",
      shortQuote:
        "Ana helped me out for 2 weeks with my 3 young kids. Her experience really showed; she was so patient with my toddlers through all their tantrums, very nurturing with the baby...",
      fullQuote:
        "Ana helped me out for 2 weeks. I was really picky who I worked with because of the young ages (2 toddlers and a baby, all under age 3), but Ana had years of experience that gave me confidence she could handle it. She was great with them and her experience really showed; she was so patient with my toddlers through all their tantrums, very nurturing with the baby, and when she had art activities and games to keep the kids happy and engaged without screens. Ana also suggested lots of great outings for us that made our stay in San Sebastian extra special.",
    },
    {
      name: "Becky F.",
      initial: "B",
      shortQuote:
        "Professional, reliable, and wonderful with children. Our son looks forward to learning with Ana!",
      fullQuote:
        "Professional, reliable, and wonderful with children. Our son looks forward to learning with Ana!",
    },
    {
      name: "Charlotte P.",
      initial: "C",
      shortQuote:
        "An absolute gem! My daughter's confidence and grades have improved tremendously.",
      fullQuote:
        "An absolute gem! My daughter's confidence and grades have improved tremendously.",
    },
    {
      name: "Lucia F.",
      initial: "L",
      shortQuote:
        "Patient, creative, and truly invested in their success. Highly recommended.",
      fullQuote:
        "Patient, creative, and truly invested in their success. Highly recommended.",
    },
  ];

  const testimonialsContainer = document.getElementById(
    "testimonials-container",
  );

  if (testimonialsContainer) {
    testimonials.forEach((t) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      const needsExpand = t.shortQuote !== t.fullQuote;

      slide.innerHTML = `
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              ${t.initial}
            </div>
            <div>
              <p class="font-semibold">${t.name}</p>
              <p class="text-xs text-gray-500">Parent</p>
            </div>
          </div>
          <div class="testimonial-quote-wrapper ${needsExpand ? "" : "auto-height"}">
            <p class="text-gray-700 italic leading-relaxed">"${t.fullQuote}"</p>
          </div>
          ${
            needsExpand
              ? `<button class="read-more-btn mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-1 transition-colors cursor-pointer" aria-label="Read more" data-expanded="false">
            <span class="icon-open"><i data-lucide="chevron-down" class="w-4 h-4"></i></span>
            <span class="icon-close hidden"><i data-lucide="chevron-up" class="w-4 h-4"></i></span>
            <span class="text-open">Read more</span>
            <span class="text-close hidden">Show less</span>
          </button>`
              : ""
          }
        </div>
      `;
      testimonialsContainer.appendChild(slide);
    });

    // Expand/collapse CSS using max-height (zero overshoot)
    const style = document.createElement("style");
    style.textContent = `
      .testimonial-quote-wrapper {
        max-height: 3.75rem;
        overflow: hidden;
        transition: max-height 0.2s ease-in-out;
      }
      .testimonial-quote-wrapper > p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .testimonial-quote-wrapper.expanded {
        max-height: 999rem;
      }
      .testimonial-quote-wrapper.expanded > p {
        -webkit-line-clamp: unset;
      }
      .testimonial-quote-wrapper.auto-height {
        max-height: none;
      }
      .testimonial-quote-wrapper.auto-height > p {
        -webkit-line-clamp: unset;
      }
    `;
    document.head.appendChild(style);

    // Pagination & navigation overrides for external layout
    const navStyle = document.createElement("style");
    navStyle.textContent = `
      /* Pagination dots */
      .swiper-pagination {
        display: flex !important;
        justify-content: center;
        position: relative !important;
        bottom: auto !important;
        padding-top: 14px;
      }
      .swiper-pagination .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #94a3b8;
        opacity: 0.45;
        margin: 0 5px !important;
        transition: opacity 0.2s, background 0.2s, transform 0.2s;
      }
      .swiper-pagination .swiper-pagination-bullet-active {
        opacity: 1;
        background: #2563eb;
        transform: scale(1.15);
      }
      /* Hide default swiper arrows since we use our own */
      .swiper-button-prev, .swiper-button-next,
      .swiper-container-pointer-down .swiper-button-prev,
      .swiper-container-pointer-down .swiper-button-next {
        display: none !important;
      }
    `;
    document.head.appendChild(navStyle);

    // Testimonials Swiper — infinite scroll with sticky snapping
    const testimonialsSwiperEl = document.querySelector(".testimonialsSwiper");
    let swiperInstance = null;

    if (testimonialsSwiperEl) {
      swiperInstance = new Swiper(testimonialsSwiperEl, {
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          pauseOnTouchEnd: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".testi-next, .testi-next-mobile",
          prevEl: ".testi-prev, .testi-prev-mobile",
        },
        spaceBetween: 24,
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        on: {
          slideChangeTransitionEnd: function () {
            // Auto-collapse any open cards — reads/writes only DOM, zero JS closures
            document
              .querySelectorAll('.read-more-btn[data-expanded="true"]')
              .forEach((btn) => {
                btn.dataset.expanded = "false";
                btn.classList.remove("open");
                const wrapper = btn.parentElement.querySelector(
                  ".testimonial-quote-wrapper",
                );
                if (wrapper) wrapper.classList.remove("expanded");
                btn.querySelector(".icon-open")?.classList.remove("hidden");
                btn.querySelector(".icon-close")?.classList.add("hidden");
                btn.querySelector(".text-open")?.classList.remove("hidden");
                btn.querySelector(".text-close")?.classList.add("hidden");
              });
          },
        },
      });
    }

    // Click handler — state lives entirely in data attributes + classes on the DOM
    document.querySelectorAll(".read-more-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const wrapper = this.parentElement.querySelector(
          ".testimonial-quote-wrapper",
        );
        const isExpanded = this.dataset.expanded === "true";

        if (isExpanded) {
          // Collapse → resume autoplay
          wrapper.classList.remove("expanded");
          this.dataset.expanded = "false";
          this.classList.remove("open");
          this.querySelector(".icon-open").classList.remove("hidden");
          this.querySelector(".icon-close").classList.add("hidden");
          this.querySelector(".text-open").classList.remove("hidden");
          this.querySelector(".text-close").classList.add("hidden");
          swiperInstance?.autoplay.start();
        } else {
          // Pause autoplay while this card is expanded
          swiperInstance?.autoplay.stop();
          // Close any other expanded card first
          document
            .querySelectorAll('.read-more-btn[data-expanded="true"]')
            .forEach((otherBtn) => {
              otherBtn.dataset.expanded = "false";
              otherBtn.classList.remove("open");
              const otherWrapper = otherBtn.parentElement.querySelector(
                ".testimonial-quote-wrapper",
              );
              if (otherWrapper) otherWrapper.classList.remove("expanded");
              otherBtn.querySelector(".icon-open")?.classList.remove("hidden");
              otherBtn.querySelector(".icon-close")?.classList.add("hidden");
              otherBtn.querySelector(".text-open")?.classList.remove("hidden");
              otherBtn.querySelector(".text-close")?.classList.add("hidden");
            });
          // Open this one
          wrapper.classList.add("expanded");
          this.dataset.expanded = "true";
          this.classList.add("open");
          this.querySelector(".icon-open").classList.add("hidden");
          this.querySelector(".icon-close").classList.remove("hidden");
          this.querySelector(".text-open").classList.add("hidden");
          this.querySelector(".text-close").classList.remove("hidden");
        }
      });
    });
  }

  lucide.createIcons();

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
