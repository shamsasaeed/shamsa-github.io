// Save third-page and fourth-page buttons as variables
let nav-btn1 = document.getElementById('first-page');
let nav-btn2 = document.getElementById('second-page');
let nav-btn3 = document.getElementById('third-page');
let nav-btn4 = document.getElementById('fourth-page');
let nav-btn5 = document.getElementById('fifth-page');
let nav-btn6 = document.getElementById('sixth-page');
let nav-btn7 = document.getElementById('seventh-page');
let nav-btn8 = document.getElementById('eigth-page');



// Add click event to both elements and set scrollPage function as callback function
nav-btn1.addEventListener('click', scrollPage);
nav-btn2.addEventListener('click', scrollPage);
nav-btn3.addEventListener('click', scrollPage);
nav-btn4.addEventListener('click', scrollPage);
nav-btn5.addEventListener('click', scrollPage);
nav-btn6.addEventListener('click', scrollPage);
nav-btn7.addEventListener('click', scrollPage);
nav-btn8.addEventListener('click', scrollPage);

function scrollPage(){
	// this keyword returns the HTML element that triggered the event (in this case, click event)
	// Check id of this HTML element
	// If id name is 'third-page'
	if(this.id === 'first-page'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight * 1,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'fourth-page'
	if(this.id === 'second-page'){
		window.scrollTo({
			// Scroll three times the height of window height
  			top: window.innerHeight * 2,
  			left: 0,
  			behavior: 'smooth'
		});
	}
}

// An array of stories as strings
let stories = [
	'Hello!',
	'I am a fish',
	'I am here to help you understand the story',
	'I hope you are enjoying the story'
];

let navButtons = document.getElementsByClassName('nav-btn');

// Add scroll event for the whole HTLM document and set changeText function as callback
document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText(){
	// Uncomment line below to see scrollY position change
	// console.log(window.scrollY);

	// pos saves current scrollY position
	let pos = window.scrollY;
	// width saves current web page width
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = parseInt(pos / height);

	// Fix color of navigation button
	// Set all button color to white
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].co.backgroundColor = 'white';
	}

	// Set color of current section button to black
	navButtons[sectionNum].co.backgroundColor = 'black';
}
