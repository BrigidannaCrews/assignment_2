const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

//for loop with range of 5
for (var i = 1; i <= 5; i++) {

  //reference holding the value of the image
  const newImage = document.createElement("img");

  //sets the path to the images 
  const path = "images/pic" + i + ".jpg";

  //sets the value of the image 
  newImage.setAttribute("src", path);

  //append image to thumbbar
  thumbBar.appendChild(newImage);

  //display image when being clicked
  newImage.addEventListener("click", displayImage);
}

//function that will be called later to display image upon clicked
function displayImage(clickedImage) {

  //"onclick" handler finds the value of the current image
  const imagePath = clickedImage.target.getAttribute("src");

  //sets the value of the image to display
  displayedImage.setAttribute("src", imagePath);
}

/* Wiring up the Darken/Lighten button */

//Influenced by MDN code 

btn.onclick = function() {

  //give variable name to button class
  const button_class = btn.getAttribute("class");

  //When main image is orginally light

  if (button_class === "dark") {

    //Changes class to 'light'

    btn.setAttribute("class", "light");

    //Change text to 'Lighten'
    btn.textContent = "Lighten";

    //Darken main image
    overlay.style.backgroundColor = "rgba(0, 0 , 0, 0.5)";

  } else {

    //Changes class to 'dark'

    btn.setAttribute("class", "dark");

    //Change text to 'Darken'
    btn.textContent = "Darken";

    //Lighten main image
    overlay.style.backgroundColor = "rgba(0, 0 , 0, 0)";

  }
};
