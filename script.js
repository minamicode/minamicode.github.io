"use strict"

function sayHi() {
	
	let name = prompt("What is your name?", "");

	if (!name) {
		alert("Hello, anonymous!");
	} else {
		alert(`Hello, ${name}!`);
	}

}

sayHi();