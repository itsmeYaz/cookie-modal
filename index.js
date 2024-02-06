/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");

setTimeout(function () {
  modal.style.display = "block";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
      Uploading your data to the dark web...
    </p>
  </div>
  `;

  setTimeout(() => {
    document.querySelector("#uploadText").textContent = `Making the sale... `;
  }, 1500);

  setTimeout(() => {
    document.querySelector("#modal-inner").innerHTML = `
    <h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);
});
