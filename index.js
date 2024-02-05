/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");

setTimeout(function () {
  modal.style.display = "block";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
