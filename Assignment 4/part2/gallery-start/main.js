/**
	Name: Deepak Singh
	File: main.js
	Date: 24 nov 2023
	 a JavaScript-powered image gallery.
*/
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
function thumbnailLoop() {
var i;
for (i = 0; i < 5; i++) {

var newImage = document.createElement('img');
newImage.setAttribute('src', "images/pic" + (i+1) + ".jpg");

thumbBar.appendChild(newImage);
}
}
thumbnailLoop();

/* Making the clicked thumbnail the large image */

thumbBar.addEventListener('click', (e) => {
    if(e.target && e.target.nodeName == "IMG") {
      displayedImage.src = e.target.src;
  }
  }); // Close event listener

/* Wiring up the Darken/Lighten button */
newImage.setAttribute('alt', xxx);