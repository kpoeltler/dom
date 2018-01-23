//variables
// method to retrieve a reference the first element in the DOM that matches the selector. Look back to our activities from last unit for reference if needed.

// * Return this variable.

// * Now in your HMTL file, add some paragraphs and use your `$` function to access one of these elements.

// * Log the return value of your function to the console using `console.dir()` instead of `console.log()` and answer the following questions:

//  * What is the type of the data that we are logging?

var $ = function(sel) {
  var elem = document.querySelectorAll(sel);
	
	var text = function(str) {
    // elem.innerText=str;
    for (var i = 0; 1 < elem.length; i++) {
      elem[i].innerText=(str);
    }
  }

	var addClass= function (className){
		for (i = 0; i < elem.length; i++) {
			elem [i].classList.add (className);
		}
	}

	var removeClass= function (className){
		for (i = 0; i < elem.length; i++) {
			elem[i]. classList.remove (className);
		}
	}

	var on= function (action, cb) {
		for (var i =0; i < elem.length; i++) {
			elem[i].addEventListener(action, cb);
			
		}
	}

//toggleClass is a function that will click 
//html
//make dom to add uls
//prompts
//write a for loop because you don't want to add remove classname to all p tags you want to find the p tag with the classname then add or remove it
var toggleClass = function (classname){
	for (var i = 0; i < elem.length; i++)
if (elem [i].classList.includes (className)) {
		elem [i].classList.remove (className);
} else {
	elem [i].classList.add (className);
		}
	}
}

var html = function (newHTML){
	 for (var i = 0; 1 < elem.length; i++) {
		elem[i].innerHTML=newHTML;
	}
}

//change use innerHTMl or change the 

  var publicAPI = {
    element: elem,
    text: text,
    addClass: addClass,
		removeClass: removeClass,
		on: on,
		html : html
		
	}
	
  return publicAPI;

//create a function to start and then add a second function inside the first function inside the dollar side function.
