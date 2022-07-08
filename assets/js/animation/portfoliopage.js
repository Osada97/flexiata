const tlse = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});

const containsc = gsap.timeline({
  scrollTrigger: {
    trigger: ".contsc-gsp",
    start: "top 80%",
    end: "0%",
  },
});

const relatedwork = gsap.timeline({
  scrollTrigger: {
    trigger: ".related-gsp",
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
    duration: 1,
    stagger: 0.2,
    ease: Power4.easeOut,
  }
);
tlse.fromTo(
  ".butani-gsp",
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: Power4.easeOut,
  },
  "<50%"
);
tlse.fromTo(
  ".webimg-gsp",
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.5 },
  "<"
);

tlse.fromTo(".banner-gsp", { opacity: 0 }, { opacity: 1, duration: 2 }, "<40%");

// !!paragraph animation
containsc.fromTo(
  ".contsc-gsp",
  {
    x: -80,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.5,
  }
);

// !!related works animation
relatedwork.fromTo(
  ".relati-gsp",
  {
    x: -80,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    stagger: 0.3,
    duration: 0.5,
  }
);
relatedwork.fromTo(
  ".gridrela-gsp",
  {
    y: -20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    duration: 0.5,
  },
  "<30%"
);
