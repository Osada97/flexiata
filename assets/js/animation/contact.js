const tlse = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});

//!!contact hero section
tlse.fromTo(
  ".mainText-gsp",
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: Power4.easeOut,
  }
);
tlse.fromTo(
  ".context-gsp",
  { scale: 0.8, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: Power4.easeOut,
  },
  "<10%"
);
tlse.fromTo(
  ".icsca-gsp",
  { scale: 2, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: Power4.easeOut,
  },
  "<"
);

tlse.fromTo(
  ".scoiani-gsp",
  { scale: 2, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: Power4.easeOut,
  },
  "<"
);

tlse.fromTo(".banner-gsp", { opacity: 0 }, { opacity: 1, duration: 3 }, "<40%");

tlse.fromTo(".fromani-gsp", { opacity: 0 }, { opacity: 1, duration: 3 }, "<");
