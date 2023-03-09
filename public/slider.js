const slides = document.querySelectorAll(".slides img");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const slideWidth = 100;
let counter = 0;
let autoSlide = true; // set to true to enable auto slide
const autoSlideTime = 10000; // set the time between auto slides (in milliseconds)
let reachMax = false;
var instance;

document.addEventListener('DOMContentLoaded' , function(){
  instance = M.Carousel.getInstance(document.getElementById('caros'));
})

nextBtn.addEventListener("click", () => {
  if(counter !== slides.length - 1) {counter++; instance.next();}
  changeImage();
  resetTimer();
  
});

prevBtn.addEventListener("click", () => {
  if(counter !== 0) {counter--; instance.prev();}
  changeImage();
  resetTimer();
});

function changeImage() {
  if (counter >= slides.length - 1) {
    reachMax = true;
  } else if (counter < 0) {
    counter = slides.length - 1;
  }
  const offset = - slideWidth * counter;
  document.querySelector(".slides").style.transform = `translateX(${offset}vw)`;
}

function autoSlideFunction() {
  if (autoSlide) {
    if(!reachMax){
      counter++;
      instance.next();
    }
    else
    {
      if(counter !== 0)
      {
        counter --
        instance.prev();
      }
      else{
        reachMax = false;
      }
    }
    changeImage();
  }
}

let timer = setInterval(autoSlideFunction, autoSlideTime);

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlideFunction, autoSlideTime);
}








// const slides = document.querySelectorAll(".slides img");
// const nextBtn = document.querySelector(".nextBtn");
// const prevBtn = document.querySelector(".prevBtn");
// let counter = 0;
// let autoSlide = true; // set to true to enable auto slide
// const autoSlideTime = 4000; // set the time between auto slides (in milliseconds)

// nextBtn.addEventListener("click", () => {
//   if (counter >= slides.length - 1) return;
//   counter++;
//   changeImage();
//   resetTimer();
// });

// prevBtn.addEventListener("click", () => {
//   if (counter <= 0) return;
//   counter--;
//   changeImage();
//   resetTimer();
// });

// function changeImage() {
//   slides.forEach((slide) => {
//     slide.style.display = "none";
//   });
//   slides[counter].style.display = "block";
//   slides[counter].style.opacity = 0;
//   let opacity = 0;
//   const fadeIn = setInterval(() => {
//     opacity += 0.05;
//     slides[counter].style.opacity = opacity;
//     if (opacity >= 1) clearInterval(fadeIn);
//   }, 50);
// }

// function autoSlideFunction() {
//   if (autoSlide) {
//     counter++;
//     if (counter > slides.length - 1) {
//       counter = 0;
//     }
//     changeImage();
//   }
// }

// let timer = setInterval(autoSlideFunction, autoSlideTime);

// function resetTimer() {
//   clearInterval(timer);
//   timer = setInterval(autoSlideFunction, autoSlideTime);
// }
