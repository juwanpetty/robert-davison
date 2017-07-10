$(document).ready(function() {
	
	let $projectItem = $('.project-item > div');
	var url = "../data/projects.json";
	
	$projectItem.click(function(){
		$('.wrapper').addClass('fadeTransition');
		
    	let projectNumber = $(this).data("project-number") - 1;
		
		setTimeout(function() {
			
			// $.getJSON(url, data, callback); 
			$.getJSON(url, function(response) {
				$(document.body).scrollTop(0)
				
				let $main = $('main');
				let projectHTML = '<div class="project-view">';
				
				$.each(response, function(index, project) {
					
					// project title
					projectHTML += '<h1 class="project-title">' + project[projectNumber].projectName + '</h1>';
					
					
					projectHTML += '<div class="project-info">';
					
					// project client and role
					projectHTML += '<div class="project-info-left"><div><h3 class="info-title">Client</h3>';
					projectHTML += '<p>' + project[projectNumber].client + '</p></div>';
					
					projectHTML += '<div><h3 class="info-title">Role</h3>';
					for (let i = 0; i < project[projectNumber].role.length; i++) {
						projectHTML += '<p>' + project[projectNumber].role[i] + '</p>';
					}
					
					// close project-info-left
					projectHTML += '</div></div>';
					
					// project description
					projectHTML += '<div class="project-info-right">';
					projectHTML += '<p class="description">' + project[projectNumber].description + '</p>';
					projectHTML += '</div>';
					
					// close project-info
					projectHTML += '</div>';
					
					// project images
					projectHTML += '<ul class="image-list">'
					
					for (let i = 0; i < project[projectNumber].images.length; i++) {
						projectHTML += '<li class="image-item"><div class="image-item-image" style="background-image: url(' + project[projectNumber].images[i] + ');"></div></li>';
					}
					
					projectHTML += '</ul>';
				});
				
				
				projectHTML += '</div>';
				$main.html(projectHTML);
				
				$('.wrapper').removeClass('fadeTransition');
				
				resizeThrottler();
				
			}); // end getJSON
			
		}, 600);
		
		
		
		
		window.addEventListener("resize", resizeThrottler, false);

		function resizeThrottler() {
			let imageItems = document.querySelectorAll('.image-item');
			if (document.body.clientWidth <= 800 && (imageItems.length !== 0)) {
				actualResizeHandler();
			} else {
			
				for(let i = 0; i < imageItems.length; i++) {
					imageItems[i].style.height = "650px";
				}
			}
		}
		
		
		function actualResizeHandler() {
			let imageItems = document.querySelectorAll('.image-item');
		
			let imageWidth = imageItems[0].clientWidth;
		
			for(let i = 0; i < imageItems.length; i++) {
				imageItems[i].style.height = imageWidth;
			}
		}
				

	}); // end click function
}); // end ready