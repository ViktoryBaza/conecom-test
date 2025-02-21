const advantagesData = [
  {
    title: "Уверенность в завтрашнем дне",
    img: "images/jpeg/advantage-1.jpg",
    description:
      "ООО «Conecom», российское подразделение французского концерна DuffBeer. Мы компания, которая честно ведет свой бизнес на территории РФ, соблюдая законодательство и гарантируя стабильность и уверенность в завтрашнем дне.",
  },
  {
    title: "Безопасность на рабочем месте – приоритет №1",
    img: "images/jpeg/advantage-2.jpg",
    description:
      "Вопросам безопасности и качества пищевой продукции в нашей компании уделяется повышенное внимание. Все производства группы DuffBeer в России постоянно работают над улучшением процессов и стремятся сделать все возможное, чтобы рабочий процесс был максимально безопасным и комфортным.",
  },

  {
    title: "Стабильная заработная плата",
    img: "images/jpeg/advantage-3.jpg",
    description:
      "Мы обеспечиваем нашим сотрудникам стабильную заработную плату в соответствии с рынком региона. Средний стаж работы в нашей компании – 7 лет.",
  },
  {
    title: "Заботимся о здоровье сотрудников",
    img: "images/jpeg/advantage-4.jpg",
    description:
      "Каждый сотрудник в нашей компании обеспечен полисом добровольного медицинского страхования. Кроме того, на каждом заводе есть медицинский пункт для сотрудников. Осуществляется страхование от несчастных случаев с первого дня работы.",
  },
  {
    title:
      "Предоставление удобной спецодежды и СИЗ для производственного персонала",
    img: "images/jpeg/advantage-5.jpg",
    description:
      "Мы предоставляем удобные СИЗ и спецодежду и в случае износа или порчи обмениваются на новые.",
  },
  {
    title: "Обучение: различные программы обучения и профессиональные тренинги",
    img: "images/jpeg/advantage-6.jpg",
    description:
      "Мы уделяем много внимания развитию наших сотрудников. В компании работает Внутренний центр обучений и ежегодно проводится большое количество обучающих мероприятий как локально на заводах, так и в головном офисе DuffBeer во Франции.",
  },
  {
    title: "Возможности для реализации творческого потенциала",
    img: "images/jpeg/advantage-7.jpg",
    description:
      "Мы ставим перед собой амбициозные и интересные цели, а реализация задач является командной работой сотрудников из различных подразделений.  Мы также принимаем активное участие в работе над кросс-функциональными проектам с коллегами из других стран присутствия DuffBeer.",
  },
  {
    title: "Мы - семейная компания и любим проводить время вместе",
    img: "images/jpeg/advantage-8.jpg",
    description:
      "Ежегодно мы проводим корпоративные мероприятия не только для наших сотрудников, но и для семей наших сотрудников. А корпоративные подарки для детей сотрудников – наша добрая предновогодняя традиция.",
  },
  {
    title: "Мы - социально ответственная компания и заботимся об окружающих",
    img: "images/jpeg/advantage-9.jpg",
    description:
      "Наша миссия лежит в основе социально-корпоративной ответственности. Мы ведем свою деятельность в соответствии с тремя основными правилами:  мы заботимся о людях; наша деятельность устойчива по своей природе; мы заботимся об окружающей среде.",
  },
];

const gridContainer = document.getElementById("advantages-grid");
advantagesData.forEach((adv, index) => {
  const advElement = document.createElement("div");
  advElement.classList.add("advantage");
  advElement.dataset.index = index;
  advElement.innerHTML = `
    <img src="${adv.img}" alt="${adv.title}">
    <div class="text">${adv.title}</div>
    <button class="toggle-btn" data-index="${index}">
      <img src="images/icons/plus.svg" alt="plus">
    </button>
  `;
  gridContainer.appendChild(advElement);
});

const sliderWrapper = document.querySelector(".swiper-wrapper");
advantagesData.forEach((adv, index) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `
    <div class="advantage" data-index="${index}">
      <img src="${adv.img}" alt="${adv.title}">
      <div class="text">${adv.title}</div>
      <button class="toggle-btn" data-index="${index}">
        <img src="images/icons/plus.svg" alt="plus">
      </button>
    </div>
  `;
  sliderWrapper.appendChild(slide);
});

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1340: {
      slidesPerView: 4,
    },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".stats-slider", {
    slidesPerView: 1,
    spaceBetween: 70,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".toggle-btn");
  if (!button) return;

  const index = button.dataset.index;
  const advElement = document.querySelector(
    `.advantage[data-index="${index}"]`
  );

  if (!advElement) return;

  const advantage = advantagesData[index];
  const isExpanded = advElement.classList.contains("expanded");

  if (isExpanded) {
    advElement.innerHTML = `
      <img src="${advantage.img}" alt="${advantage.title}">
      <div class="text">${advantage.title}</div>
      <button class="toggle-btn" data-index="${index}">
        <img src="images/icons/plus.svg" alt="plus">
      </button>
    `;
    advElement.classList.remove("expanded");
  } else {
    advElement.innerHTML = `
      <div class="text_after">${advantage.description}</div>
      <button class="toggle-btn" data-index="${index}">
        <img src="images/icons/cross.svg" alt="cross">
      </button>
    `;
    advElement.classList.add("expanded");
  }
});
