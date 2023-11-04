document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const nextButton = registrationForm.querySelector(".next-button");
    const prevButton = registrationForm.querySelector(".prev-button");
  
    nextButton.addEventListener("click", function () {
      const step1 = registrationForm.querySelector(".step-1");
      const step2 = registrationForm.querySelector(".step-2");
  
      step1.style.display = "none";
      step2.style.display = "block";
    });
  
    prevButton.addEventListener("click", function () {
      const step1 = registrationForm.querySelector(".step-1");
      const step2 = registrationForm.querySelector(".step-2");
  
      step2.style.display = "none";
      step1.style.display = "block";
    });
  });
  