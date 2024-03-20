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
