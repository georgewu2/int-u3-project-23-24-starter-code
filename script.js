// Declare variables below to save the different divs of your story.

// when option one button is clicked
let optionOneButton = document.querySelector(".option-one");
optionOneButton.addEventListener("click", function() {
  // show option one screen
  let optionOneScreen = document.querySelector(".option-one-screen");
  console.log(optionOneScreen);
  optionOneScreen.style.display = "block";

  // hide the main screen
  let storyOpeningScreen = document.querySelector(".story-opening-container");
  storyOpeningScreen.style.display = "none";
});







// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });