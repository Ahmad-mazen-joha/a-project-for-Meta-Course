let article = document.querySelector("article");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let nav = document.querySelector("nav");
let header = document.querySelector("body>header");
window.onscroll = () => {
  if (window.scrollY >= main.offsetTop) {
    footer.classList.add("active");
  } else {
    footer.classList.remove("active");
  }
};
let landImgCont = document.querySelector("main header");
window.onload = () => {
  setTimeout(() => {
    nav.classList.add("active");
    header.classList.add("active");
  }, 100);
  setTimeout(() => {
    main.classList.add("active");
    landImgCont.classList.add("centerImage");
  }, 200);
  setTimeout(() => {
    article.classList.add("active");
  }, 400);
};
/*landing changing */

let landingText = document.querySelector(".header-cont > p");
let i = 1;

let switchFun = () => {
  setInterval(() => {
    landImgCont.classList.remove("centerImage");
    checkFun();
    i++;
    console.log(i);
    setTimeout(() => {
      landImgCont.classList.add("centerImage");
    }, 1500);
  }, 5000);
};
function opacityAnim() {
  setTimeout(() => {
    landImgCont.classList.add("opacity-res");
    landImgCont.classList.remove("opacity");
    setTimeout(() => {
      landImgCont.classList.remove("opacity-res");
    }, 1000);
  }, 1000);
}
function checkFun() {
  if (i === 1) {
    landImgCont.classList.remove("opacity-res");
    landImgCont.classList.add("opacity");
    setTimeout(() => {
      landImgCont.classList.remove("one");
      landImgCont.classList.add("three");
      landingText.innerHTML = "Bring nature indoors with our beautiful plants.";
    }, 900);
    opacityAnim();
  } else if (i === 2) {
    landImgCont.classList.remove("opacity-res");
    landImgCont.classList.add("opacity");
    setTimeout(() => {
      landImgCont.classList.remove("three");
      landImgCont.classList.add("second");
      landingText.innerHTML =
        "Find the perfect plant for your space and style.";
    }, 900);
    opacityAnim();
  } else {
    i = 0;
    landImgCont.classList.remove("opacity-res");
    landImgCont.classList.add("opacity");
    setTimeout(() => {
      landImgCont.classList.remove("second");
      landImgCont.classList.add("one");
      landingText.innerHTML = "We have plants for every budget and lifestyle.";
    }, 900);
    opacityAnim();
  }
}
switchFun();
