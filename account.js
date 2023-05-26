let roundingNumber = document.getElementById("rounding-number")
let fourgee = document.getElementById("fourgee")
let diamondsLove = document.getElementById("diamonds-love")
let count = 0

function plus() {
  count += +1
  roundingNumber.innerHTML = count
}
console.log(count)

function minus() {
  count += -1
  roundingNumber.innerHTML = count
}
console.log(count)

function save() {
  let countStr = count + " - "
  roundingNumber.textContent += countStr
  fourgee.textContent = 0
  count = 0
}

console.log(count)

for (let i = count; i < 0; i++) {
  console.log(count)
}



function carousel() {
  const afterjustsomeminutes = document.getElementsByClassName(".afterjustsomeminutes");
  const makeenoconfuseme = document.getElementsByClassName(".makeenoconfuseme");
  const letsayyouaretheone = document.querySelectorAll(".letsayyouaretheone");
  const totalItems = letsayyouaretheone.length;
  let slide = 0;
  let moving = true;

  // Set initial classes
 letsayyouaretheone.classList.add("carousel");
 letsayyouaretheone[0].classList.add("active");

  function moveCarouselTo(slide) {
    if (!moving) {
      const dot = document.querySelector(".dot-active");
      const dots = document.querySelectorAll(".dot");

      // Remove active classes from dots
      dots.forEach((dot) => {
        dot.classList.remove("dot-active");
      });

      // Add active class to the current dot
      dots[slide].classList.add("dot-active");

      // Set the left position of the letsayyouaretheones
     letsayyouaretheones.style.left = -(slide * letsayyouaretheone[0].offsetWidth) + "px";
      moving = true;

      // Remove active class from the current slide
      const currentSlide = document.querySelector(".letsayyouaretheone.active");
      currentSlide.classList.remove("active");

      // Add active class to the new slide
     letsayyouaretheone[slide].classList.add("active");

      // Wait for the transition to end before allowing animation again
      const transitionDuration = getComputedStyle(currentSlide).getPropertyValue(
        "transition-duration"
      );

      setTimeout(() => {
        moving = false;
      }, parseFloat(transitionDuration) * 1000);
    }
  }

  // Create navigation dots
  const dotContainer = document.createElement("div");
  dotContainer.classList.add("dot-container");
  carouselSection.appendChild(dotContainer);

  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
  }

  // Set active class on the first dot
  document.querySelector(".dot").classList.add("dot-active");

  // Add event listeners to the navigation dots
  const navigationDots = document.querySelectorAll(".dot");
  navigationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slide = index;
      moveCarouselTo(slide);
    });
  });

  // Add event listeners to the next and previous buttons
  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  carouselSection.appendChild(nextButton);

  const previousButton = document.createElement("button");
  previousButton.classList.add("prev-btn");
  carouselSection.appendChild(previousButton);

  nextButton.addEventListener("click", () => {
    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    moveCarouselTo(slide);
  });

  previousButton.addEventListener("click", () => {
    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }
    moveCarouselTo(slide);
  });

  // Set the width of the letsayyouaretheones
 letsayyouaretheone.style.width = totalItems * letsayyouaretheone[0].offsetWidth + "px";
}
