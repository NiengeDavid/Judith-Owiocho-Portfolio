//Handburger Menu
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

//Scroll effects for sm

// Select all menu buttons
const menuButtons = document.querySelectorAll('.menu-button');

// Attach click event listener to each button
menuButtons.forEach(button => {
  button.addEventListener('click', scrollToSection);
});

// Scroll to the target section
function scrollToSection(event) {
  // Get the target section ID from the button's data-target attribute
  const targetSectionId = event.target.getAttribute('data-target');

  // Find the target section element
  const targetSection = document.getElementById(targetSectionId);

  // Scroll to the target section using smooth behavior
  targetSection.scrollIntoView({ behavior: 'smooth' });
}



//Slide Show 1
const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
	slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
	slidesContainer.scrollLeft -= slideWidth;
});

//Slide Show 2
const slidesContainertwo = document.querySelector(".slides-containertwo");
const slideWidthtwo = slidesContainertwo.querySelector(".slidetwo").clientWidth;
const prevButtontwo = document.querySelector(".prevtwo");
const nextButtontwo = document.querySelector(".nexttwo");

nextButtontwo.addEventListener("click", () => {
	slidesContainertwo.scrollLeft += slideWidthtwo;
});

prevButtontwo.addEventListener("click", () => {
	slidesContainertwo.scrollLeft -= slideWidthtwo;
});

//Slide show 3
const slidesContainerthree = document.querySelector(".slides-containerthree");
const slideWidththree = slidesContainerthree.querySelector(".slidethree").clientWidth;
const prevButtonthree = document.querySelector(".prevthree");
const nextButtonthree = document.querySelector(".nextthree");

nextButtonthree.addEventListener("click", () => {
	slidesContainerthree.scrollLeft += slideWidththree;
});

prevButtonthree.addEventListener("click", () => {
	slidesContainerthree.scrollLeft -= slideWidththree;
});


//Read More Function one
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  //Read More Function two
  function myFunctiontwo() {
    var dots = document.getElementById("dotstwo");
    var moreText = document.getElementById("moretwo");
    var btnText = document.getElementById("myBtntwo");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  //Read More Function three
  function myFunctionthree() {
    var dots = document.getElementById("dotsthree");
    var moreText = document.getElementById("morethree");
    var btnText = document.getElementById("myBtnthree");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }