// Variables
const autoScrollDuration = 600;

// Word Animate
const words = [
	"Full Stack Developer",
	"Software Engineer<i class='bx bxs-star-half'></i>",
	"Web Developer<i class='bx bx-star' ></i>",
	"Graphic Designer<i class='bx bxs-star' ></i>",
];

//Main timeline
let mainTimeline = gsap.timeline({
	repeat: -1,
});

//For each word, create a new timeline, use the Text plugin, then append that timeline to the main one
words.forEach((word) => {
	let textTimeline = gsap.timeline({
		repeat: 1,
		yoyo: true,
		repeatDelay: 2,
	});
	textTimeline.to("#typewriter", {
		text: word,
		duration: 1,
	});
	mainTimeline.add(textTimeline);
});

// Smooth scroll
$(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on("click", function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				autoScrollDuration, // Adjust the duration as needed
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		}
	});
});

// Active section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNavLink() {
	sections.forEach((section, index) => {
		const rect = section.getBoundingClientRect();
		const isActive = rect.top <= 500 && rect.bottom >= 500; // Adjust the threshold as needed

		if (isActive) {
			navLinks[index].classList.add("active");
		} else {
			navLinks[index].classList.remove("active");
		}
	});
}

window.addEventListener("scroll", highlightNavLink);
