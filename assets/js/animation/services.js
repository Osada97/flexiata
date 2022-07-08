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
const sectionThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionThree-gsp",
    start: "top 80%",
    end: "0%",
  },
});
const sectionFourth = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionFourth-gsp",
    start: "top 80%",
    end: "0%",
  },
});
const sectionFifth = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionFifth-gsp",
    start: "top 80%",
    end: "0%",
  },
});
const sectionSixth = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionSixth-gsp",
    start: "top 80%",
    end: "0%",
  },
});
const sectionSeven = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionSeventh-gsp",
    start: "top 80%",
    end: "0%",
  },
});
const sectionEight = gsap.timeline({
  scrollTrigger: {
    trigger: ".sectionEight-gsp",
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
    ease: Power4.easeOut,
  }
);

tlse.fromTo(".banner-gsp", { opacity: 0 }, { opacity: 1, duration: 2 }, "<40%");

tlse.fromTo(
  ".cardse-gsp",
  { y: 10, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, stagger: 0.3 },
  "<"
);

// !!section one
sectionOne.fromTo(
  ".sec-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionOne.fromTo(
  ".imani-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionOne.fromTo(
  ".mainTe-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionOne.fromTo(
  ".mainTepara-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
);

// !!section two
sectionTwo.fromTo(
  ".secT-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionTwo.fromTo(
  ".imaniT-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionTwo.fromTo(
  ".mainTeT-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionTwo.fromTo(
  ".mainTeparaT-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
);

//!!section three
sectionThree.fromTo(
  ".secTh-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionThree.fromTo(
  ".imaniTh-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionThree.fromTo(
  ".mainTeTh-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionThree.fromTo(
  ".mainTeparaTh-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
);

//!!section fourth
sectionFourth.fromTo(
  ".secfr-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionFourth.fromTo(
  ".imanifr-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionFourth.fromTo(
  ".mainTefr-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionFourth.fromTo(
  ".mainTeparafr-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
);

//!!section fifth
sectionFifth.fromTo(
  ".secff-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionFifth.fromTo(
  ".imaniff-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionFifth.fromTo(
  ".mainTeff-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionFifth.fromTo(
  ".mainTeparaff-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
);

//!!section sixth
sectionSixth.fromTo(
  ".secsx-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionSixth.fromTo(
  ".imanisx-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionSixth.fromTo(
  ".mainTesx-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionSixth.fromTo(
  ".mainTeparasx-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
);

//!!section seventh
sectionSeven.fromTo(
  ".secsv-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionSeven.fromTo(
  ".imanisv-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionSeven.fromTo(
  ".mainTesv-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionSeven.fromTo(
  ".mainTeparasv-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
);

//!!section eight
sectionEight.fromTo(
  ".secei-gsp",
  { scale: 0.8 },
  { scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay: 0.2, duration: 1 }
);

sectionEight.fromTo(
  ".imaniei-gsp",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<20%"
);
sectionEight.fromTo(
  ".mainTeei-gsp",
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 0.5 },
  "<20%"
);
sectionEight.fromTo(
  ".mainTeparaei-gsp",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 },
  "<50%"
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
