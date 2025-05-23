//////לרה חור-211565445-502
///////אחמד זוביידאת-502-

/////////////////->אירועי דפדפן<-///////////////////////
/////////////////-Task -1-///////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("hoverBox");

  // Change color when mouse enters
  box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "orange";
  });
  /////////////////-Task -2-///////////////////////
  // Return color when mouse leaves
  box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "gray";
  });
});

 /////////////////-Task -3-///////////////////////
 document.addEventListener("DOMContentLoaded", function () {
   const button = document.getElementById("clickBtn");
   const countSpan = document.getElementById("clickCount");
   let count = 0;

   button.addEventListener("click", function () {
     count++;
     countSpan.textContent = count;
   });
 });


