$(document).ready(function() {
	// $('.dnarrow').click(function() {
	// 	$('h1 span').toggleClass('nameColor');
	// })

// - - - - - - - - - - SKILL BOX LEVEL RISE ANIMATION

	$(document).scroll(function(){

		var top = $(window).scrollTop();

		if ($(window).width() >= 1500){
			if(top > 1000) $('.level1').addClass('active');
			if(top < 1000) $('.level1').removeClass('active');
			if(top > 1000) $('.level2').addClass('active');
			if(top < 1000) $('.level2').removeClass('active');
			if(top > 1000) $('.level3').addClass('active');
			if(top < 1000) $('.level3').removeClass('active');
			if(top > 1000) $('.level4').addClass('active');
			if(top < 1000) $('.level4').removeClass('active');
		}

		else if ($(window).width() < 1500 && $(window).width() >= 1200) {
			if(top > 800) $('.level1').addClass('active');
			if(top < 800) $('.level1').removeClass('active');
			if(top > 800) $('.level2').addClass('active');
			if(top < 800) $('.level2').removeClass('active');
			if(top > 800) $('.level3').addClass('active');
			if(top < 800) $('.level3').removeClass('active');
			if(top > 800) $('.level4').addClass('active');
			if(top < 800) $('.level4').removeClass('active');
		}

		else if ($(window).width() < 1200 && $(window).width() >= 950) {
			if(top > 650) $('.level1').addClass('active');
			if(top < 650) $('.level1').removeClass('active');
			if(top > 650) $('.level2').addClass('active');
			if(top < 650) $('.level2').removeClass('active');
			if(top > 650) $('.level3').addClass('active');
			if(top < 650) $('.level3').removeClass('active');
			if(top > 650) $('.level4').addClass('active');
			if(top < 650) $('.level4').removeClass('active');
		}

		else if ($(window).width() < 950 && $(window).width() >= 700) {
			if(top > 600) $('.level1').addClass('active');
			if(top < 600) $('.level1').removeClass('active');
			if(top > 600) $('.level2').addClass('active');
			if(top < 600) $('.level2').removeClass('active');
			if(top > 600) $('.level3').addClass('active');
			if(top < 600) $('.level3').removeClass('active');
			if(top > 600) $('.level4').addClass('active');
			if(top < 600) $('.level4').removeClass('active');
		}

		else if ($(window).width() < 700) {
			if(top > 500) $('.level1').addClass('active');
			if(top < 500) $('.level1').removeClass('active');
			if(top > 500) $('.level2').addClass('active');
			if(top < 500) $('.level2').removeClass('active');
			if(top > 500) $('.level3').addClass('active');
			if(top < 500) $('.level3').removeClass('active');
			if(top > 500) $('.level4').addClass('active');
			if(top < 500) $('.level4').removeClass('active');
		}


	});

	$('.box1').click(function() {
		$('.level1').toggleClass('active');
	})

	$('.box2').click(function() {
		$('.level2').toggleClass('active');
	})

	$('.box3').click(function() {
		$('.level3').toggleClass('active');
	})

	$('.box4').click(function() {
		$('.level4').toggleClass('active');
	})
});

