$(function() {

	//anti-drag img
	$("img").on("dragstart", function(e){
		e.preventDefault()
	})
	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".top-menu ul").slideToggle();
	})

	$(".slider").owlCarousel({
		items: 1,
	});
	$(".slider-items").owlCarousel({
		items: 1,
	})
	$(".last-slider").owlCarousel({
		items: 1,
		nav: true,
  	navText: ["<img src='../img/arrow-left.png'>","<img src='../img/arrow-right.png'>"],
	});



	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
