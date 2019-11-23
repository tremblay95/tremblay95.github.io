---
---
var sc1 = {{ site.data.showcases.showcase1 | jsonify }};
var sc2 = {{ site.data.showcases.showcase2 | jsonify }};
var projects = {{ site.data.projects | jsonify }};

$(document).ready(function(){
	var $h = $(".header");
	if($h.length){
		var $nav = $(".nav-bg-dark");
		if(!window.matchMedia('(max-width: 767px)').matches){
			$(document).scroll(function() {
				if($(this).scrollTop() + $(".nav-bg-dark").outerHeight(true) > $h.offset().top + $h.outerHeight(true)){
					$nav.css("background", "{{site.sass_js_vars.dark}}").css("border-bottom", "2px solid {{site.sass_js_vars.highlight}}");
				} else {
					$nav.css("background", "transparent").css("border-bottom", "none");
				}
			});
		} else {
			$nav.css("background", "{{site.sass_js_vars.dark}}").css("border-bottom", "2px solid {{site.sass_js_vars.highlight}}");
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
	$("#modal-desc").text(proj.description);

	var $gallery = $("#gallery");
	var $inds = $("#indicators");

	$gallery.html(`
	<div class="carousel-item active">
		<img class="img-fluid" src="/assets/projects/`+ proj.title + `/` + proj.images[0] +`">
	</div>
	`);
	
	$inds.html(`<li data-target="#carousel" data-slide-to="0" class="active"></li>`);

	if(proj.images.length > 1){
		$inds.removeClass("hidden");
		$("#carousel>a").removeClass("hidden");
	} else {
		$inds.addClass("hidden");
		$("#carousel>a").addClass("hidden");
	}

	for(var i = 1; i < proj.images.length; ++i){
		$gallery.append(`
		<div class="carousel-item">
			<img class="img-fluid" src="/assets/projects/`+ proj.title + `/` + proj.images[i] +`">
		</div>
		`);
		$inds.append(`<li data-target="#carousel" data-slide-to="` + i + `"></li>`);
	}

}