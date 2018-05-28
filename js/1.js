$(document).ready(function() {
 	$('.bonnut li').click(function() {
 		$('.bonnut li').removeClass('active');
 		$(this).addClass('active');
 		x= $(this).index();
 		x=x+1;
 		$('.bonnd ul li').removeClass('active1');
 		$('.bonnd ul li:nth-child('+x+')').addClass('active1');

 	});
 	$('.quickview').click(function() {
 		$('.quickviewbig').addClass('hello');
 		$('.den').addClass('hello');
 	});
 	$('i.nutx,.den').click(function(event) {
 		$('.quickviewbig').removeClass('hello');
 		$('.den').removeClass('hello');
 	});
 	$(document).keyup(function(e) {
 		if (e.keyCode==27) {
 			$('.quickviewbig').removeClass('hello');
 		$('.den').removeClass('hello');
 		}
 	});
});