$(document).ready(function() {

	var clock,
		stop = 0,
		work = 1,
		play = 2,
		pause = 3,
		state = stop,
		workTime = document.getElementById("work").value * 60;
		playTime = document.getElementById("play").value * 60;
		idea = new Audio('http://res.cloudinary.com/ronanland/video/upload/v1465021678/bensound-littleidea-pomo_ldtgqd.mp3');
		energy = new Audio('http://res.cloudinary.com/ronanland/video/upload/v1465206162/bensound-energy-pomo_e4j7go.mp3');

	clock = $('.clock').FlipClock( {
		clockFace: 'MinuteCounter',
		countdown: true,
		autoStart: false,

		 callbacks: {
			stop: function() {
				switchSession()
			}
		 }
	});

clock.setTime(document.getElementById("work").value * 60);


	function switchSession() {

		if (state ==  work && clock.getTime() == 0) {
			state = play;
			clock.setTime(document.getElementById("play").value * 60);
			idea.play();
			setTimeout(function() {
				clock.start();
			}, 2000);
		}
		else if (state == play && clock.getTime() == 0) {
			state = work;
			clock.setTime(document.getElementById("work").value * 60);
			energy.play();
			setTimeout(function() {
				clock.start();
			}, 2000);
		}
	}

	// start clock
	$('.buttonStart').click(function(e) {
		if (state == stop || state == pause) {
			state = work;
			clock.start();
			$(".buttonStart").addClass("hidden");
			$(".buttonPause").removeClass("hidden");
		}
	});

	// pause clock
	$(".buttonPause").click(function(e) {
		if (state == work || state == play)	{
			state = pause;
			clock.stop();
			$(".buttonStart").removeClass("hidden");
			$(".buttonPause").addClass("hidden");
		}
	});

	// reset clock
	$('.buttonReset').click(function(e) {
		state = stop;
		clock.stop();
		clock.reset();
		clock.setTime(document.getElementById("work").value * 60);
		$(".buttonStart").removeClass("hidden");
		$(".buttonPause").addClass("hidden");
	});

	$('#work').change(function() {
		clock.setTime(document.getElementById("work").value * 60);
	});

});
