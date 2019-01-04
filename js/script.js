
$(document).ready(function(){
	$('.menu, .overlay').click(function () {
		$('.menu').toggleClass('clicked');  
		$('#nav').toggleClass('show'); 
	});
	$('.pesq-icon').click(function(){
		$(".search-box").toggleClass("exibir");
		$("#undnav").toggleClass("sumir");
		$(".pesq-icon").toggleClass("close");
	});
});


//BOTÃO SCROLL UP
$(document).ready(function(){
	height = $(window).height() * 1/5;
	$('.backtop').hide();

	$(window).scroll(function(){
		if($(this).scrollTop() > height){
			$('.backtop').fadeIn();
			$('#undnav').addClass('down');
		}else{
			$('.backtop').fadeOut();
			$('#undnav').removeClass('down');
		}
	});
	$('.backtop').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
});
$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		},
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
