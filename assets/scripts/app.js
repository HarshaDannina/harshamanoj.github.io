const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Text Mining",
				weight: 10.3
			}, {
				text: "Computer Vision",
				weight: 8
			}, {
				text: "Data Science",
				weight: 12
			}, {
				text: "Visualization",
				weight: 4
			}, {
				text: "KNN",
				weight: 7
			}, {
				text: "Decision Trees",
				weight: 8
			}, {
				text: "WebApp Development",
				weight: 6
			}, {
				text: "Machine Learning",
				weight: 13
			}, {
				text: "BootStrap",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Machine Learning Developer,", "student, blogger, freelancer.", "love everything about code.", "have knowledge on text mining,", "data science, computer vision,", "deep learning, algorithm development.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
