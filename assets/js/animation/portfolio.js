// portfolio animation
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: Power3.easeOut },
});

//!!portfolio hero section
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

tl.fromTo(".banner-gsp", { opacity: 0 }, { opacity: 1, duration: 3 }, "<40%");

tl.fromTo(
  ".cardse-gsp",
  { y: 10, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, stagger: 0.3 },
  "<"
);
tl.fromTo(
  ".butanipo-gsp",
  { y: 10, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, stagger: 0.3 },
  "<"
);
tl.fromTo(
  ".imganipo-gsp",
  { y: 10, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, stagger: 0.5 },
  "<15%"
);
