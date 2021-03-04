console.log("Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
    initTypedJs();
});

// ---------- smooth scroll ---------- //

function initScrollToTop() {
   
   document.onscroll = function () { 
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) { // when to show the scroll to top button
        document.getElementById("scrollTop").style.display = "block"; // display block at 500
    } else {
        document.getElementById("scrollTop").style.display = "none"; // hide the button before 500
    }
}

function scrollToTheTop() { // makes the button smooth
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// ---------- slider ---------- //


"use strict"; // to enable strict mode and modern JavaScript functionality

/* ----------- Global Variables ----------- */
let slideSections;
let activeSlide = 0;

/* ----------- The DOM is ready ----------- */
document.addEventListener("DOMContentLoaded", function () {
  slideSections = document.querySelectorAll(".section-slide"); // declaring slideSections
  showSlide(0); // show the first section
  setInterval(() => setActiveSlide(), 9000); // start the loop interval 
});

/* ----------- Slide Section Functions ----------- */

/**
 * Hiding all slideSections
 */
function hideAllSlideSections() {
  for (const slideSection of slideSections) {
    slideSection.style.display = "none";
  }
}

/**
 * displaying a slide section by given index
 */
function showSlide(index) {
  hideAllSlideSections(); // start by hiding all slides sections
  activeSlide = index;
  slideSections[activeSlide].style.display = "block"; // display slide section by activeSlide number
}

/**
 * Chaning and displaying the active slide section 
 * - changing the global variable activeSlide and display the new active slideSection
 */
function setActiveSlide() {
  if (activeSlide < slideSections.length - 1) { // checking if activeSlide is lower than the number of slide sections
    activeSlide++; // incrementing activeSlide number (+1)
  } else { // if not, change the activeSlide back to the first one
    activeSlide = 0;
  }
  hideAllSlideSections(); //hide all slides
  slideSections[activeSlide].style.display = "block"; // display slide section by activeSlide number
}


/* ----------- skills videoer ----------- */

setTimeout( function(){ 
    jQuery('.wp-video video').get(0).play(); // display the video
  }  , 2000 );

jQuery(document).on('mouseover', '.wp-video', function(){ // display the mouseover
    jQuery(this).find('video').get(0).play() 
});

jQuery(document).on('mouseout', '.wp-video', function(){ // pause the mouseover 
  jQuery(this).find('video').get(0).pause() 
});