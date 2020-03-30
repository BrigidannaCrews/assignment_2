const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 1; i <= 5; i++){
    const newImage = document.createElement('img');
    const path = 'pic' + i + '.jpg' ;
    newImage.setAttribute('src', path);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', displayImage)
}

function displayImage(clickedImage) {
    const imagePath = clickedImage.target.getAttribute('src');
    displayedImage.setAttribute('src', imagePath);
};

/* Wiring up the Darken/Lighten button */
