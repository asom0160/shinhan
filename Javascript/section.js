// section1 스크롤 //
const swiper = new Swiper(".swiper", {
  loop: true, // 무한 슬라이드
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 클릭 가능하게 설정
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// header //
const ScrollHandler = () => {
  let lastScrollTop = 0;
  const header = document.querySelector("#header");
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    console.log(currentScroll);
    const isScrolling = currentScroll > lastScrollTop;

    header.style.transition = "transform 0.5s ease";
    header.style.transform = `translateY(${isScrolling ? "-100%" : "0%"})`;

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
};
ScrollHandler();

gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".swiper",
//     start: "50% top",
//     scrub: true,
//   },
// });
// tl.to(".swiper", {
//   background: "#fff",
//   opacity: 0,
//   duration: 0.5,
// });

// const t2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".two",
//     start: "50% top",
//     scrub: true,
//   },
// });
// t2.to(".two", {
//   background: "#ebc3ce",
// });

// const t3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".third",
//     start: "50% top",
//     scrub: true,
//   },
// });
// t3.to(".third", { background: "#f2d9a1" });

const t4 = gsap.timeline();
t4.fromTo(
  ".all > .like",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);
t4.fromTo(
  ".all >.good",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);
t4.fromTo(
  ".all >.note",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);
t4.fromTo(".main", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
t4.fromTo(".bear", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
t4.fromTo(
  ".all >.travel",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);
t4.fromTo(
  ".all >.accident",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);
// const t5 = gsap.timeline();
// t5.fromTo(
//   ".swiper-wrapper > .swiper-slide",
//   { y: 20, opacity: 0 },
//   { y: 0, opacity: 1, duration: 1 }
// );

const btn1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".all >.third",
    start: "-10% top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
});
btn1.fromTo(".btn3", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

// const all = gsap.timeline();
// all.scrollTrigger({
//   trigger: ".all >.two",
//   start: "-50% top",
//   markers: true,
//   scrub: true,
// });
// all.scrollTrigger({
//   trigger: ".all > .third",
//   start: "-50% top",
//   markers: true,
//   scrub: true,
// });
// all.scrollTrigger({
//   trigger: ".all >.four",
//   start: "-50% top",
//   markers: true,
//   scrub: true,
// });

// all.fromTo(
//   ".all > .two",
//   { backgroundColor: "#fff", opacity: 1 }, // Initial state
//   { backgroundColor: "#84bbfe", opacity: 0, duration: 0.5 } // End state
// );

// all.fromTo(
//   ".all > .third",
//   { backgroundColor: "#fff" }, // Initial state
//   { backgroundColor: "#ebc3ce", duration: 0.5 } // End state
// );

// all.fromTo(
//   ".all > .four",
//   { backgroundColor: "#ebc3ce" }, // Initial state
//   { backgroundColor: "#f2d9a1", duration: 0.5 } // End state
// );
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

const all = gsap.timeline();

// .two, .third, .four 각각에 대해 scrollTrigger 설정
all.to(".all > .one", {
  backgroundColor: "#fff",
  opacity: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: ".all > .one",
    start: "30% top",
    markers: true,
    scrub: true,
  },
});

all.to(".all > .two", {
  backgroundColor: "#ebc3ce",
  duration: 0.1,
  scrollTrigger: {
    trigger: ".all > .two",
    start: "30% top",
    markers: true,
    scrub: true,
  },
});

all.to(".all > .third", {
  backgroundColor: "#f2d9a1",
  duration: 0.1,
  scrollTrigger: {
    trigger: ".all > .third",
    start: "30% top",
    markers: true,
    scrub: true,
  },
});
