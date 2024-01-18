// document.querySelector(".nav-list").addEventListener("click",function(event){
//     var listItems = document.querySelectorAll("li");

//     // Use forEach to iterate over each <li> element
//     listItems.forEach(function(li) {
//         li.style.color ="";

//         // This function will be executed for each <li> element

//         // Change the text color of the current <li> element to "blue"
//         // this.style.color = "green";
//     });
//     if (event.target.tagName === "Li" && event.target.closest(".nav-list")){
//         event.target.style.color = "green"
//     }
// });



// // document.querySelector(".li").addEventListener("click", function(){
// //     this.style.color = "green"
// // })



//selects the ul for the slides
const track = document.querySelector(".carousel_track");
//selects the ul for the slides and turns the children into an array
const slide = Array.from(track.children);
//selects the right button for the carousel
const nextButton = document.querySelector(".right-carousel-button");
//selects the left button for the carousel
const prevButton = document.querySelector(".left-carousel-button");
//selects the div for the dots
const dotsNav = document.querySelector(".carousel-nav");
//makes the dots an array 
const dots = Array.from(dotsNav.children);
//returns the width of the first slide 
const slideWidth = slide[0].getBoundingClientRect().width;
console.log(slideWidth)

//to set a constant width for eacg slide  
for ( let a = 0; a < slide.length; a++){
    slide[a].style.left = slideWidth * a + "px";
}


const move = (currentSlide,targetslide,track) => {
    // returns the -x axis i.e the distance to move to the left
    track.style.transform = "translateX(-"+ targetslide.style.left + ")";
    //removes "current_-side" class to the classList of the currentSlide 
    currentSlide.classList.remove("current_slide");
    //adds "current_-side" class to the classList of the nextSlide or prevSlide
    targetslide.classList.add("current_slide");
}

const updateDots = (current_dot, targetDot) => {
    //removes "current_-side" class to the classList of the currentDot 
    current_dot.classList.remove("current_slide");
    //adds "current_-side" class to the classList of the currentDot 
    targetDot.classList.add("current_slide");
};


//funxtion adds "its hidden" class to the firstDot or lastDot 
const hideButtons = (targetIndex,prevButton,nextButton,slide)=> {
    //for firstDot
    if (targetIndex === 0){
        prevButton.classList.add("its_hidden");
        nextButton.classList.remove("its_hidden");
    //for lastDot
    }else if (targetIndex === slide.length -1 ){
        prevButton.classList.remove("its_hidden");
        nextButton.classList.add("its_hidden");
    }
    //the everything in between removes the "its_hidden " class
    else {
        prevButton.classList.remove("its_hidden");
        nextButton.classList.remove("its_hidden");
    }
}
//to move the slides right
nextButton.addEventListener("click", function(){
    //selects the element with class "current_slide" inside the ul(carousel_track)
    const currentSlide = track.querySelector(".current_slide");
    //this selects the next element to the right
    const nextSlide = currentSlide.nextElementSibling;
    //selects the dot with the class "current_slide"
    const current_dot = dotsNav.querySelector(".current_slide");
    //selects the nextelementslibing for the dot with the class "current_slide"
    const nextDot = current_dot.nextElementSibling;
    //finds the index of the nextSlide 
    const nextIndex = slide.findIndex(slide => slide === nextSlide);
    
    updateDots(current_dot,nextDot);
    move(currentSlide,nextSlide,track);
    hideButtons(nextIndex,prevButton,nextButton,slide);
});

//to move the slides left
prevButton.addEventListener("click",function(){
    //selects the element with class "current_slide" inside the ul(carousel_track)
    const currentSlide = track.querySelector(".current_slide");
    //this selects the slide to the left
    const prevSlide = currentSlide.previousElementSibling;
    //selects the dot with the class "current_slide"
    const current_dot = dotsNav.querySelector(".current_slide");
    //selects the prevelementslibing for the dot with the class "current_slide"
    const prevDot = current_dot.previousElementSibling;
    //finds the index of the prevSlide 
    const prevIndex = slide.findIndex(slide => slide === prevSlide);
    
    move(currentSlide,prevSlide,track);
    hideButtons(prevIndex,prevButton,nextButton,slide);
    updateDots(current_dot,prevDot);

});


//for the dots to move the slides
dotsNav.addEventListener("click", e => {
    //this makes sure that only the dot buttons are clickable in the div
    const targetDot = e.target.closest("button");
    //this breaks the function if anything other than the dots in the div are clicked
    if (!targetDot) return;
    //selects the element with class "current_slide" inside the ul(carousel_track)
    const currentSlide = track.querySelector(".current_slide");
    //selects the element with class "current_slide" inside the ul(carousel_nav)
    const current_dot = dotsNav.querySelector(".current_slide");
    //finds the index of the clickedDot 
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    //from the array slide uses the index of the clickedDot to select a slide
    const targetslide = slide[targetIndex];

    move(currentSlide,targetslide,track);
    updateDots(current_dot,targetDot);
    hideButtons(targetIndex,prevButton,nextButton,slide)

})

// // ... (Your existing code)

// Function to move to the next slide
const moveToNextSlide = () => {
    const currentSlide = track.querySelector(".current_slide");
    const nextSlide = currentSlide.nextElementSibling || slide[0];
    const current_dot = dotsNav.querySelector(".current_slide");
    const nextDot = current_dot.nextElementSibling || dots[0];
    const nextIndex = slide.findIndex((slide) => slide === nextSlide);

    updateDots(current_dot, nextDot);
    // move(currentSlide, nextSlide, track);
    hideButtons(nextIndex, prevButton, nextButton, slide);
       // Hide the current slide with a fade-out effect
    //    currentSlide.style.opacity = 0;

       // Move to the next slide with a fade-in effect
       setTimeout(() => {
           move(currentSlide, nextSlide, track);
        //    currentSlide.style.opacity = 1;
       }, 40); // Adjust the timeout based on the transition duration
};

// Function to start the automatic sliding
const startAutomaticSlide = () => {
    // Change the time interval (in milliseconds) according to your preference
    setInterval(moveToNextSlide, 3000); // 5000ms = 5 seconds
};

// Call the function to start automatic sliding
startAutomaticSlide();

// ... (Your existing code)

document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class 'fade-in-up'
    var fadeElements = document.querySelectorAll('.fade-in-up');

    function fadeInElements() {
        var triggerHeight = window.innerHeight * 0.95; // Adjust the percentage as needed

        fadeElements.forEach(function (element, index) {
            // Calculate the distance of the element from the top of the viewport
            var elementTop = element.getBoundingClientRect().top;

            // Check if the element is in the viewport and below the trigger height
            if (elementTop - triggerHeight < 0) {
                // Calculate staggered delay based on index
                var delay = index * 100; // Adjust the delay as needed

                // Apply the delay using CSS style
                element.style.transitionDelay = delay + 'ms';

                // Add the 'fade-in' class after the delay
                element.classList.add('fade-in');
            }
        });
    }

    // Attach the fadeInElements function to the scroll event
    window.addEventListener('scroll', fadeInElements);

    // Trigger the fadeInElements function on page load
    fadeInElements();
});

var div = document.querySelector(".image-container-staff")
div.addEventListener("mouseover", function(){
    h3.style.color = "blue";
})

