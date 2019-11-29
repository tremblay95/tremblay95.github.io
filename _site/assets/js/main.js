var sc1 = {"title":"RocketMaze Game","description":"This is my submission for Project 1 of my Interactive Media course (CSCI 4160U) in university. The assignment consisted of making a 2D game in Unity and incorporating as many concepts as possible about 2D game development that we covered in class.<br><br>The game begins with your rocket ship on a refueling station at ground level and the goal is to launch into space, through a maze, while avoiding various obstacles, conserving fuel and not taking damage.","images":["rm (1).png","rm (2).png","rm (3).png","rm (4).png","rm (5).png","rm (6).png","rm (7).png"],"link":"https://github.com/mrchadley/csci4160_projects/tree/master/project1","video":"https://www.youtube.com/embed/B7w3Xec2EUo"};
var sc2 = {"title":"Concurrent Raytracer","description":"This is my final project for a course I took in university, CSCI 4060U: Massively Parallel Programming. My plan was to create a simple raytracing app that could use different APIs for parallelism and compare them to each other and to a sequential version. The APIs I chose were OpenMP, POSIX Threads and OpenCL. Unfortuately, with other final projects, presentations and exams to worry about, I was not able to start on the OpenCL version in time to meet the submission deadline.<br><br>I do intend to implement the OpenCL version, as well as add functionality for loading a scene from a file, add support for multiple shapes (instead of just spheres), and make general improvements.","images":["main.jpg","sequential.png","openmp.png","pthread.png"],"link":"https://github.com/mrchadley/csci4060_raytracer"};
var projects = [];

$(document).ready(function(){
	var $h = $(".header");
	if($h.length){
		var $nav = $(".nav-bg-dark");
		if(!window.matchMedia('(max-width: 767px)').matches){
			$(document).scroll(function() {
				if($(this).scrollTop() + $(".nav-bg-dark").outerHeight(true) > $h.offset().top + $h.outerHeight(true)){
					$nav.css("background", "#222").css("border-bottom", "2px solid #009696");
				} else {
					$nav.css("background", "transparent").css("border-bottom", "none");
				}
			});
		} else {
			$nav.css("background", "#222").css("border-bottom", "2px solid #009696");
		}
	}

	$('.carousel').carousel('pause');

	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
});

function showProject(index){
	var proj = projects[index];
	fillProjectModal(proj);
}

function showShowcase(index){
	var proj = index == 0 ? sc1 : sc2;
	fillProjectModal(proj);
}

function fillProjectModal(proj){

	var $link = $("#modal-link");
	if(proj.link){
		$link.removeClass("hidden");
		$link.attr("href", proj.link);
	}
	else{
		$link.addClass("hidden");
	}

	$("#modal-title").text(proj.title);
	$("#modal-desc").html(proj.description);


	var $gallery = $("#gallery");
	var $inds = $("#indicators");

	var carouselIndex = 0;
	var imagesIndex = 0;

	if(proj.video){
		$gallery.html(`
		<div class="carousel-item active">
			<div class="embed-responsive embed-responsive-16by9">
				<iframe class="embed-responsive-item" src="` + proj.video + `" allowfullscreen></iframe>
			</div>
		</div>
		`);

		++carouselIndex;
	}
	else
	{
		$gallery.html(`
		<div class="carousel-item active">
			<img class="img-fluid" src="/assets/projects/`+ proj.title + `/` + proj.images[0] +`">
		</div>
		`);
		++imagesIndex;
		++carouselIndex;
	}
	
	$inds.html(`<li data-target="#carousel" data-slide-to="0" class="active"></li>`);

	if(proj.images.length > 1 || proj.video){
		$inds.removeClass("hidden");
		$("#carousel>a").removeClass("hidden");
	} else {
		$inds.addClass("hidden");
		$("#carousel>a").addClass("hidden");
	}

	for(; imagesIndex < proj.images.length; ++imagesIndex, ++carouselIndex){
		$gallery.append(`
		<div class="carousel-item">
			<img class="img-fluid" src="/assets/projects/`+ proj.title + `/` + proj.images[imagesIndex] +`">
		</div>
		`);
		$inds.append(`<li data-target="#carousel" data-slide-to="` + carouselIndex + `"></li>`);
	}

}