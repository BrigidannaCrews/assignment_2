const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++){
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

btn.onclick = function(){

    const button_class = btn.getAttribute('class');


    if(button_class === 'dark'){

    btn.setAttribute('class', 'light')
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0 , 0, 0.5)';

    } else{

        btn.setAttribute('class', 'dark')
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0 , 0, 0)';

    }


}