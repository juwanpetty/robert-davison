window.addEventListener("resize", resizeThrottler, false);

function resizeThrottler() {
	let projectItems = document.querySelectorAll('.project-item');
	if (document.body.clientWidth <= 800 && (projectItems.length !== 0)) {
		actualResizeHandler();
	} else {
	
		for(let i = 0; i < projectItems.length; i++) {
			projectItems[i].style.height = "355px";
		}
	}
}


function actualResizeHandler() {
	let projectItems = document.querySelectorAll('.project-item');

    let projectWidth = projectItems[0].clientWidth;

    for(let i = 0; i < projectItems.length; i++) {
        projectItems[i].style.height = projectWidth;
    }
}

actualResizeHandler();