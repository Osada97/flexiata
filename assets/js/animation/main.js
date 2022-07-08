// index page animation

const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});
const counterTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
    start: "top 80%",
    end: "0%",
  },
});
const oServices = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-section",
    start: "top 80%",
    end: "0%",
  },
});
const oServicesGrid = gsap.timeline({
  scrollTrigger: {
    trigger: ".gridse-gsp",
    start: "-5% 80%",
    end: "100%",
  },
});
const whyChoose = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth-section",
    start: "top 80%",
    end: "0%",
  },
});
const ourWork = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "top 80%",
    end: "0%",
  },
});
const letsStart = gsap.timeline({
  scrollTrigger: {
    trigger: ".eight-section",
    start: "top 80%",
    end: "0%",
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
    duration: 2,
    ease: Power4.easeOut,
  }
);

//hero button animation
tl.fromTo(
  ".buttonm-gsp",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 2 },
  "<30%"
);

// hero section right column
tl.fromTo(".rgcol-gsp", { opacity: 0 }, { opacity: 1, duration: 3 }, "<");

// hero section image right column
tl.fromTo(".rgcolimg-gsp", { opacity: 0.9 }, { opacity: 1 }, "<");

//top banner animation
tl.fromTo(".banner-gsp", { opacity: 0 }, { opacity: 1, duration: 2 }, "<40%");

tl.fromTo(".mouse-gsp", { opacity: 0 }, { opacity: 1 }, "<10%");

// !!customer animation
counterTl.fromTo(
  ".counter-gsp",
  { y: "30", opacity: 0 },
  { y: "0", opacity: 1, duration: 0.5, stagger: 0.3 }
);

// !!Our services animation
oServices.fromTo(
  ".setitle-gsp",
  { x: "-50%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    delay: 0.5,
    duration: 1,
    ease: Power4.easeOut,
  }
);
oServices.fromTo(
  ".separa-gsp",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 2,
  },
  "<50%"
);

oServices.fromTo(
  ".sebanner-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<10%"
);

oServices.fromTo(
  ".sebgimg-gsp",
  { y: "-50" },
  { y: 0, ease: Elastic.easeOut.config(1, 0.7), duration: 1 },
  "<"
);

oServicesGrid.fromTo(
  ".colani-gsp",
  { y: "-10%" },
  {
    y: 0,
    ease: Elastic.easeOut.config(1, 0.7),
    duration: 2,
    delay: 0.5,
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
  { y: "-20" },
  { y: 0, duration: 0.5, stagger: 0.2 },
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
    duration: 1,
    ease: Power4.easeOut,
  }
);
ourWork.fromTo(
  ".ourpara-gsp",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 2,
  },
  "<50%"
);
ourWork.fromTo(
  ".bgimg-gsp",
  { opacity: 0, scale: 0.9 },
  { opacity: 1, scale: 1, duration: 1 },
  "<"
);
ourWork.fromTo(
  ".ourbanner-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<10%"
);
ourWork.fromTo(
  ".ourworkimgrid-gsp",
  { opacity: 0.9, scale: 0.95 },
  { opacity: 1, scale: 1, duration: 0.5, stagger: 0.5 },
  "<10%"
);
ourWork.fromTo(".serbut-gsp", { y: "20" }, { y: "0", duration: 0.5 }, "<10%");

// !!lets start section
letsStart.fromTo(
  ".letsMainc-gsp",
  { scale: 0.9 },
  { scale: 1, ease: Circ.easeOut, delay: 0.5, duration: 0.5 }
);
letsStart.fromTo(
  ".bgimglet-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<10%"
);
letsStart.fromTo(
  ".letbanner-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<"
);
