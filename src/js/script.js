$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

})




$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Solution Architect", "Chemical Engineer", "DevOps Engineer", "Data Engineer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function() {

    	if(window.pageYOffset > skillsTopOffset -$(window).height() + 200) {

    		$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
    	});	

    }

    if(!countUpFinished && window.pageYOffset > statsTopOffset -$(window).height() + 200) {

    	$(".counter").each(function() {

    	var element = $(this);
    	var endVal = parseInt(element.text());

    	element.countup(endVal);

    	})	

    	countUpFinished = true;

    }

    });


	$("[data-fancybox]").fancybox({
		// Enhanced configuration for better video support
		buttons: [
			"zoom",
			"slideShow",
			"fullScreen",
			"thumbs",
			"close"
		],
		// Video specific settings
		video: {
			autoplay: false,
			tpl: '<video class="fancybox-video" controls preload="metadata">' +
				  '<source src="{src}" type="video/mp4" />' +
				  'Your browser does not support the video tag.' +
				  '</video>'
		},
		// Mobile optimization
		mobile: {
			clickContent: "close",
			clickSlide: "close"
		},
		// Better handling for large files
		beforeLoad: function(instance, current) {
			// Check if this is a video link
			if (current.src && current.src.match(/\.(mp4|webm|ogg)$/i)) {
				// For large files, we'll handle them differently
				var fileSize = 0;
				// We'll use a timeout to handle large files
				setTimeout(function() {
					if (fileSize > 100 * 1024 * 1024) { // 100MB threshold
						// Open in new tab for very large files
						window.open(current.src, '_blank');
						instance.close();
					}
				}, 1000);
			}
		},
		// Error handling
		onError: function(instance, current) {
			// If video fails to load in lightbox, open in new tab
			if (current.src && current.src.match(/\.(mp4|webm|ogg)$/i)) {
				window.open(current.src, '_blank');
				instance.close();
			}
		}
	});

	// Handle video download functionality
	$(".downloadVideo").click(function(e) {
		e.preventDefault();
		var videoUrl = $(this).attr("href");
		var videoName = videoUrl.split('/').pop();
		
		// Create a temporary link to trigger download
		var link = document.createElement('a');
		link.href = videoUrl;
		link.download = videoName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});

	// Enhanced video click handler - now opens in new tab
	$(".openVideo").click(function(e) {
		var $this = $(this);
		var videoUrl = $this.attr("href");
		
		// Show loading indicator briefly
		$this.find("i").removeClass("fa-play").addClass("fa-spinner fa-spin");
		
		// Reset icon after a short delay
		setTimeout(function() {
			$this.find("i").removeClass("fa-spinner fa-spin").addClass("fa-play");
		}, 1000);
		
		// Video will open in new tab automatically due to target="_blank"
	});


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});



	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});





