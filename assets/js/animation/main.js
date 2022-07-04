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
const oServicesGrid = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-section",
    start: "30% 80%",
    end: "100%",
    markers: { startColor: "yellow", endColor: "black" },
  },
});
const whyChoose = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth-section",
    start: "top 80%",
    end: "0%",
    markers: { startColor: "red", endColor: "red" },
  },
});
const ourWork = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "top 80%",
    end: "0%",
    markers: { startColor: "blue", endColor: "red" },
  },
});
const letsStart = gsap.timeline({
  scrollTrigger: {
    trigger: ".eight-section",
    start: "top 80%",
    end: "0%",
    markers: { startColor: "blue", endColor: "red" },
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

// !!customer animation
counterTl.fromTo(
  ".counter-gsp",
  { y: "30", opacity: 0 },
  { y: "0", opacity: 1, duration: 0.5, stagger: 0.4 }
);

// !!Our services animation
oServices.fromTo(
  ".setitle-gsp",
  { x: "-50%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    delay: 0.5,
    duration: 2,
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
  { opacity: 1, duration: 2 },
  "<10%"
);

oServices.fromTo(
  ".sebgimg-gsp",
  { y: "-50" },
  { y: 0, ease: Elastic.easeOut.config(1, 0.7), duration: 2 },
  "<"
);

oServicesGrid.fromTo(
  ".colani-gsp",
  { y: "-50" },
  {
    y: 0,
    ease: Elastic.easeOut.config(1, 0.7),
    duration: 3,
    delay: 1,
    stagger: 0.1,
  },
  "<5%"
);

// !!why choose us animation
whyChoose.fromTo(
  ".secmain-gsp",
  { y: "-50", scale: 0.9 },
  { y: 0, scale: 1, duration: 1, delay: 0.5, stagger: 0.1 }
);

whyChoose.fromTo(
  ".whybut-gsp",
  { y: "-50" },
  { y: 0, duration: 1, stagger: 0.2 },
  "<"
);
whyChoose.fromTo(
  ".imgwhy-gsp",
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2 }
);
whyChoose.fromTo(
  ".secwhy-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, stagger: 0.2 },
  "<"
);

//!! our work section animation
ourWork.fromTo(
  ".ourTitle-gsp",
  { x: "-50%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    delay: 0.5,
    duration: 2,
    ease: Power4.easeOut,
  }
);
ourWork.fromTo(
  ".ourpara-gsp",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
  },
  "<50%"
);
ourWork.fromTo(
  ".bgimg-gsp",
  { opacity: 0, scale: 0.9 },
  { opacity: 1, scale: 1, duration: 2 },
  "<"
);
ourWork.fromTo(
  ".ourbanner-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 2 },
  "<10%"
);
ourWork.fromTo(
  ".ourworkimgrid-gsp",
  { opacity: 0.9, scale: 0.95 },
  { opacity: 1, scale: 1, duration: 1, stagger: 0.5 },
  "<10%"
);
ourWork.fromTo(".serbut-gsp", { y: "20" }, { y: "0", duration: 1 }, "<10%");

// !!lets start section
letsStart.fromTo(
  ".letsMainc-gsp",
  { scale: 0.9 },
  { scale: 1, ease: Circ.easeOut, delay: 0.5, duration: 1 }
);
letsStart.fromTo(
  ".bgimglet-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 2 },
  "<10%"
);
letsStart.fromTo(
  ".letbanner-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 2 },
  "<"
);
