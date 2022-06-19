const counterSection = document.querySelector("#counter");
const counters = document.querySelectorAll(".counter");
const speed = 200;

//use for active counter animation when counter section viewable for client
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      activeCounter();
    }
  },
  {
    threshold: 0.5,
  }
);

observer.observe(counterSection);

const activeCounter = () => {
  console.log("active");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.split(" ")[0];

      if (count < target) {
        const value = count + 1;
        if (counter.classList.contains("plus")) {
          counter.innerText = `${Math.ceil(value)} +`;
        } else {
          counter.innerText = `${Math.ceil(value)}`;
        }
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });
};
