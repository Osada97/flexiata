// index page animation

const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});
const counterTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
    start: "top 80%",
    end: "0%",
    markers: true,
  },
});
const oServices = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-section",
    start: "top 80%",
    end: "0%",
    markers: { startColor: "blue", endColor: "black" },
  },
});

// !!hero section animation
// hero main text animation
tl.fromTo(
  ".mainText-gsp",
  { x: "-50%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    delay: 0.5,
    duration: 3,
    ease: Power4.easeOut,
  }
);

//hero button animation
tl.fromTo(
  ".buttonm-gsp",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 3 },
  "<30%"
);

// hero section right column
tl.fromTo(".rgcol-gsp", { opacity: 0 }, { opacity: 1, duration: 4 }, "<");

// hero section image right column
tl.fromTo(".rgcolimg-gsp", { scale: 0.9 }, { scale: 1 }, "<");

//top banner animation
tl.fromTo(".banner-gsp", { opacity: 0 }, { opacity: 1, duration: 3 }, "<40%");

tl.fromTo(".mouse-gsp", { opacity: 0 }, { opacity: 1 }, "<10%");

// !!counter animation
counterTl.fromTo(
  ".counter-gsp",
  { y: "30", opacity: 0 },
  { y: "0", opacity: 1, duration: 0.5, stagger: 0.5 }
);

// !!Our services animation
oServices.fromTo(
  ".setitle-gsp",
  { x: "-50%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    delay: 0.5,
    duration: 3,
    ease: Power4.easeOut,
  }
);
oServices.fromTo(
  ".separa-gsp",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
  },
  "<50%"
);

oServices.fromTo(
  ".sebanner-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 3 },
  "<10%"
);

oServices.fromTo(
  ".sebgimg-gsp",
  { y: "-50" },
  { y: 0, ease: Elastic.easeOut.config(1, 0.7), duration: 3 },
  "<"
);
