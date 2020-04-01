const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
for (var i = 1; i <= 5; i++) {
  const newImage = document.createElement("img");
  const path = "images/pic" + i + ".jpg";
  newImage.setAttribute("src", path);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", displayImage);
}

function displayImage(clickedImage) {
  const imagePath = clickedImage.target.getAttribute("src");
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
