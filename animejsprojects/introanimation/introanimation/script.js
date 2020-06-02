

 var animation1 = anime({

	targets:'.box .block',
    backgroundColor: ["hsl(250, 75%, 50%)", "#4095bf"],
    translateX: anime.stagger(9, {grid: [31, 12], from: 'center', axis: 'x',}),
    translateY: anime.stagger(9, {grid: [31, 12], from: 'center', axis: 'y',}), 	
 	rotate: anime.stagger(450, {grid: [31, 12], from: 'center', axis: 'x',}),
  	rotate: anime.stagger(450, {grid: [31, 12], from: 'center', axis: 'y',}),
	scale: [
	{value:.1, duration: 400, easing: 'easeOutSine'},
	{value: 1, duration: 400, easing: 'easeInQuad'},
	],
	delay: anime.stagger(100, {grid: [31,12], from: 'center'}),
	opacity: 0,



});

var animation2 = anime({
	targets: '#name path' ,
	strokeDashoffset: [anime.setDashoffset,0],
	easing: 'easeInOutQuad',
	duration: 1000,
	direction: 'alternate',
	delay: 800,
});


var animation3 = anime({
	targets: '#button' ,
	opacity: [0, 1],
	easing: 'easeInOutQuad',
	delay: 2500,
});

function animateAll() {
  animation1.restart();
  animation2.restart();
  animation3.restart();
}


document.querySelector('.replay').onclick = animateAll;


