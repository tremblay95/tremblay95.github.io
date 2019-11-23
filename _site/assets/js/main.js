var sc1 = {"title":"Project SC1","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante erat, dignissim eget nulla vel, eleifend iaculis ex. Nam sit amet consectetur sem. Nullam ante ipsum, suscipit id sodales ac, eleifend vel est. Sed in fermentum mi. Donec non lobortis dui, in maximus eros. Etiam odio tellus, commodo eget porta et, maximus et nisl. Nullam suscipit tortor arcu, quis molestie nunc varius ac. Cras a sollicitudin diam. Donec ante mi, mollis ac lorem ut, suscipit tempus ante. Nulla felis enim, pretium a magna ornare, rhoncus tristique dolor.","images":["main.jpg","main (2).jpg"],"link":""};
var sc2 = {"title":"SC2 - Another Proj","description":"Vivamus tincidunt, turpis non porttitor mattis, nulla nulla luctus mauris, in facilisis turpis turpis euismod eros. Nam tincidunt vehicula diam, vitae convallis augue. Pellentesque molestie, urna facilisis tincidunt egestas, nunc lacus blandit tellus, in congue neque nisl quis lectus. Curabitur lorem urna, blandit nec fringilla eget, porttitor sit amet turpis. Nulla egestas, dolor ut ultricies pellentesque, lacus odio efficitur ligula, sagittis hendrerit metus magna non em. Aliquam in ante nec libero rutrum tempor. Pellentesque lectus elit, pellentesque eu orci sit amet, porttitor faucibus enim. Curabitur rutrum ipsum lacus, vel fermentum orci sollicitudin sed. Aenean posuere facilisis commodo. Fusce pulvinar erat vel tristique sodales. Mauris porta vitae est sed mattis. Nunc aliquam purus est, eget viverra nisl molestie ut.","images":["main.jpg"],"link":""};
var projects = [{"title":"Till Developer","description":"Donec id tincidunt velit, sit amet vestibulum tortor. Phasellus tempus nulla ac eleifend sagittis. Phasellus ac metus tristique, vehicula turpis a, tempor turpis. Suspendisse velit nisl, posuere ac dolor in, lacinia aliquet nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec purus sem. Donec pharetra nunc eu leo viverra, et sollicitudin odio egestas. Sed sed egestas orci. Donec sit amet sollicitudin ligula. Duis nec lectus iaculis, euismod tellus imperdiet, congue felis. Mauris eu dapibus ligula. Nam lacinia ultrices finibus. Praesent ultrices nec risus eu luctus. Mauris convallis ut diam eget maximus. Praesent hendrerit faucibus velit imperdiet vehicula. Integer nunc ex, semper ac consectetur id, varius vitae elit.","images":["01_till.jpg"],"link":""},{"title":"Chat Financing","description":"Curabitur volutpat aliquam interdum. Nunc ut leo bibendum, porta velit vel, malesuada velit. Aenean efficitur condimentum elit, non semper nibh hendrerit aliquet. Sed elementum bibendum luctus. Nunc pharetra nisl quis sodales tempus. Ut sit amet risus quis massa sodales luctus quis id ante. Nulla lacinia sem a augue consequat mattis convallis id nulla. Maecenas consectetur eget mauris a imperdiet.","images":["01_chat.jpg"],"link":""},{"title":"Complete Football","description":"Integer tortor leo, convallis eget vehicula et, luctus non magna. Maecenas sit amet malesuada ex. Duis fermentum leo nunc, non viverra risus faucibus eu. Integer molestie odio quam, eu lacinia justo rhoncus non. Mauris feugiat ac mi vitae interdum. Praesent volutpat laoreet interdum. Quisque vel dui ex. Fusce imperdiet dignissim turpis, at gravida justo malesuada vitae. Sed ac eros a nunc efficitur pharetra non ut orci. Vestibulum sed accumsan elit. Aenean vehicula elementum mi et malesuada. Etiam cursus, libero nec semper auctor, lectus risus convallis tortor, sit amet congue lacus lorem sed est. Nam volutpat, dolor quis gravida cursus, eros lacus accumsan tellus, sit amet varius justo libero ut leo. Nam sollicitudin elit mi, vitae aliquam nulla vestibulum eu.","images":["01_complete.jpg"],"link":""},{"title":"For Bananas","description":"Nam in hendrerit dui, vel tincidunt nulla. Nullam molestie sed magna in sodales. Nulla libero enim, condimentum a imperdiet in, condimentum vitae enim. Duis luctus interdum laoreet. Suspendisse sed sem mattis, scelerisque sem id, vulputate lacus. Morbi a hendrerit enim, eget fringilla nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sollicitudin risus. Nulla tempus sed quam a posuere. Quisque nec porta ex, ac sodales ex. Vivamus luctus vulputate felis, id feugiat justo consectetur at. Quisque scelerisque nec velit sit amet aliquet.","images":["01_bananas.jpg"],"link":""},{"title":"Present Great","description":"Praesent nec ultricies nisi, sed consectetur sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec finibus laoreet purus. In iaculis cursus mattis. Etiam convallis tellus eget tortor accumsan imperdiet. Donec eget augue odio. Suspendisse porttitor massa sed efficitur interdum. Proin lacinia malesuada tellus quis viverra. Suspendisse scelerisque diam bibendum scelerisque maximus. Sed et ante eget nulla viverra varius vitae sit amet justo. Suspendisse nec mauris aliquet, hendrerit dui eu, gravida sapien. Phasellus leo urna, maximus eu vulputate id, aliquet nec libero. Vivamus non finibus sapien. Cras sed enim magna.","images":["01_present.jpg"],"link":""}];

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