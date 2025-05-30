//////לרה חור-211565445-502
///////-313536633-אחמד זוביידאת-502-

/////////////////->Event Listener<-///////////////////////
/////////////////-HW-1-///////////////////////

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-button").forEach((button) => {
    button.addEventListener("click", () => {
      const moreText =
        button.previousElementSibling.querySelector(".more-text");

      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        button.textContent = "Show less";
      } else {
        moreText.style.display = "none";
        button.textContent = "Read full review";
      }
    });
  });
});
