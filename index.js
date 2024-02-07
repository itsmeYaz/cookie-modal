const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const declineBtn = document.querySelector("#decline-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const modalChoiceBtns = document.querySelector("#modal-choice-btns");

setTimeout(function () {
  modal.style.display = "block";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
  modalChoiceBtns.classList.toggle("reverse");
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);

  const name = consentFormData.get("fullName");
  console.log(name);

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
    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>`;
    modalCloseBtn.disabled = false;
  }, 3000);
});
