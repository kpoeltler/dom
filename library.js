
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

  var publicAPI = {
    element: elem,
    text: text,
    addClass: addClass,
		removeClass: removeClass,
		on: on,
		html : html
		
	}
	
  return publicAPI;


