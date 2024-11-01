const animLeft = document.querySelectorAll(".animLeft");
const animRight = document.querySelectorAll(".animRight");

window.addEventListener("scroll", () => {
  let scrollValue =
    ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100;

  if (scrollValue > 48) {
    animLeft.forEach((animLeft) => {
      animLeft.style.transform = "translateX(0)";
      animLeft.style.opacity = "1";
    });
  } else {
    animLeft.forEach((animLeft) => {
      animLeft.style.transform = "translateX(-50px)";
      animLeft.style.opacity = "0";
    });
  }

  if (scrollValue > 48) {
    animRight.forEach((animRight) => {
      animRight.style.transform = "translateX(0)";
      animRight.style.opacity = "1";
    });
  } else {
    animRight.forEach((animRight) => {
      animRight.style.transform = "translateX(50px)";
      animRight.style.opacity = "0";
    });
  }
});
