const timeline = gsap.timeline();
timeline
  .to(".overlay-text", {
    opacity: 0,
    y: -60,
    delay: 0.5,
    ease: "expo.inOut",
  })
  .to(".overlay-1", {
    y: "-100%",
    ease: "expo.inOut",
  })
  .to(
    ".overlay-2",
    {
      y: "-100%",
      ease: "expo.inOut",
    },
    "-=.3"
  )
  .from(
    ".background-text-1",
    {
      x: "100%",
    },
    "-=.1"
  )
  .from(
    ".background-text-2",
    {
      x: "-100%",
    },
    "-=.1"
  )
  .from(".animation", {
    opacity: 0,
    stagger: 0.2,
    y: 100,
  })
  .from(".hero-img", {
    x: 200,
    opacity: 0,
  });

////////////////////////////////////////////////////
const navList = document.querySelector(".navlist");
const navLinks = document.querySelectorAll(".navlink");
const menuButton = document.querySelector(".menu-btn");
const hideMenu = document.querySelector(".hide-menu-btn");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("nav-open");
  });
});

menuButton.addEventListener("click", () => {
  navList.classList.add("nav-open");
});

hideMenu.addEventListener("click", () => {
  navList.classList.remove("nav-open");
});
