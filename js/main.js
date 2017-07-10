const scrollElement = document.querySelector("#scrollToTop");
const scrollNav = document.querySelector("nav");

window.addEventListener("scroll", function() {
	if (document.body.clientWidth <= 800) {
	
		if (window.scrollY > (window.innerHeight*.5)) {
			scrollElement.classList.add("visible");
		} else {
			scrollElement.classList.remove("visible");
		}
		
	} else {
		
		if (window.scrollY > window.innerHeight*.25) {
			scrollElement.classList.add("visible");
		} else {
			scrollElement.classList.remove("visible");
		}
	
	}
  
  
  if (document.body.clientWidth <= 800) {
	
		if (window.scrollY > (75)) {
			scrollNav.classList.add("shadow");
		} else {
			scrollNav.classList.remove("shadow");
		}
		
	} else {
		
		if (window.scrollY > (75)) {
			scrollNav.classList.add("shadow");
		} else {
			scrollNav.classList.remove("shadow");
		}
	
	}
	
    
});


