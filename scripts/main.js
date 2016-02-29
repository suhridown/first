
var myButton = document.querySelector('Button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name :');
	localStorage.setItem('name',myName);
	
   if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi  ' +myName +'! Mozila or Chrome'
}
var myImage = document.querySelector('img');
    myImage.onclick = function(){
	mySrc = myImage.getAttribute('src');
	if (mySrc==='images/firefox-icon.png') {
		myImage.setAttribute('src','images/img2.png');

		var myHeading = document.querySelector('h1');
		myHeading.textContent = 'Hi  ' +myName +'!....Chrome is Awesome!';

	}
	else {
		myImage.setAttribute('src','images/img1.png');

		var myHeading = document.querySelector('h1');
		myHeading.textContent = 'Hi ' +myName +'!....Mozila is Cool!';
	}
}
}
myButton.onclick = function() {
  setUserName();
}