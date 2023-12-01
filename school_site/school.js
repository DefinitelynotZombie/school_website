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



const track = document.querySelector(".carousel_track");
const slide = Array.from(track.children);
const nextButton = document.querySelector(".right-carousel-button");
const prevButton = document.querySelector(".left-carousel-button");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slide[0].getBoundingClientRect().width;




// console.log(slideWidth);

// slide[0].style.left = 0 + "px";
// slide[1].style.left = slideWidth + "px";
for ( let a = 0; a < slide.length; a++){
    slide[a].style.left = slideWidth * a + "px";
}


nextButton.addEventListener("click", function(){
    //move the slide to the left
    const currentSlide = track.querySelector(".current_slide");
    
})