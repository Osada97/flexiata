const tlse = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});

const sectionOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionOne-gsp",
    start: "top 80%",
    end: "0%",
  },
});
const sectionTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionTwo-gsp",
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

//!!services hero section
tlse.fromTo(
  ".mainText-gsp",
  { x: "-50%", opacity: 0 },
  {
    x: "0%",
    opacity: 1,
    delay: 0.5,
    duration: 2,
    stagger: 0.2,
    ease: Power4.easeOut,
  }
);
tlse.fromTo(
  ".heroimg-gsp",
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: Power4.easeOut,
  },
  "<10%"
);

tlse.fromTo(".banner-gsp", { opacity: 0 }, { opacity: 1, duration: 2 }, "<40%");

// !!save and time section
sectionOne.fromTo(
  ".titleani-gsp",
  { y: "-50", opacity: 0 },
  { y: "0", opacity: 1, duration: 0.5 }
);
sectionOne.fromTo(".bor-gsp", { opacity: 0 }, { opacity: 1, duration: 0.5 });
sectionOne.fromTo(
  ".imgsec-gsp",
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.5 },
  "<"
);
sectionOne.fromTo(
  ".rowani-gsp",
  { x: 20, opacity: 0 },
  { x: 0, opacity: 1, stagger: 0.5, duration: 0.5 },
  "<"
);

// !!how we work section
sectionTwo.fromTo(
  ".titleaniT-gsp",
  { y: "-50", opacity: 0 },
  { y: "0", opacity: 1, duration: 0.5 }
);
sectionTwo.fromTo(".borT-gsp", { opacity: 0 }, { opacity: 1, duration: 0.5 });
sectionTwo.fromTo(
  ".imgsecT-gsp",
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.5 },
  "<"
);
sectionTwo.fromTo(
  ".rowaniT-gsp",
  { x: 20, opacity: 0 },
  { x: 0, opacity: 1, stagger: 0.5, duration: 0.5 },
  "<"
);
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
