"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  selectedValue = selectedValue.toLowerCase(); // Pastikan input user jadi huruf kecil

  filterItems.forEach((item) => {
    const itemCategory = item.dataset.category.toLowerCase(); // Pastikan kategori item juga jadi huruf kecil

    if (selectedValue === "all" || selectedValue === itemCategory) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

function togglePlay(item) {
  const audio = item.querySelector(".music-audio");
  const playOverlay = item.querySelector(".play-overlay");

  document.querySelectorAll(".music-item").forEach((otherItem) => {
    const otherAudio = otherItem.querySelector(".music-audio");
    const otherPlayOverlay = otherItem.querySelector(".play-overlay");
    if (otherAudio !== audio) {
      otherAudio.pause();
      otherAudio.currentTime = 0;
      otherPlayOverlay.textContent = "▶";
    }
  });

  if (audio.paused) {
    audio.play();
    playOverlay.textContent = "❚❚";
  } else {
    audio.pause();
    playOverlay.textContent = "▶";
  }

  audio.onended = () => {
    playOverlay.textContent = "▶";
  };
}

function updateProgress(audio) {
  const progressBar = audio
    .closest(".music-content")
    .querySelector(".progress-bar");
  const percentage = (audio.currentTime / audio.duration) * 300;
  progressBar.style.width = percentage + "%";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".music-item").forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 300);
  });
});

function togglePlay(el) {
  let audio = el.querySelector(".music-audio");
  if (audio.paused) {
    document.querySelectorAll(".music-audio").forEach((a) => a.pause());
    audio.play();
  } else {
    audio.pause();
  }
}

function updateProgress(audio) {
  let progress = (audio.currentTime / audio.duration) * 100;
  audio.closest(".music-content").querySelector(".progress-bar").style.width =
    progress + "%";
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");

  function showAboutSection() {
    aboutSection.classList.add("show");
  }

  function hideAboutSection() {
    aboutSection.classList.remove("show");
  }

  // Trigger animasi ketika About muncul
  document
    .querySelector("[data-page='about']")
    .addEventListener("click", showAboutSection);

  // Opsional: Bisa tambahin event untuk menyembunyikan saat ganti halaman
  document
    .querySelectorAll("[data-page]:not([data-page='about'])")
    .forEach((el) => {
      el.addEventListener("click", hideAboutSection);
    });
});
