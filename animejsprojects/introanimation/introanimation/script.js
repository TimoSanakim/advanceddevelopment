//animatie voor de blokken
 var animation1 = anime({
	targets:'.block',	//target de css element .block
    backgroundColor: ["#4120df", "#4095bf"], //de blokken veranderen van kleur #4020df naar #4095bf
    translateX: anime.stagger(9, {grid: [31, 13], from: 'center', axis: 'x',}), //de blokken bewegen 9units plus op de x as of min op de x as.
    translateY: anime.stagger(9, {grid: [31, 13], from: 'center', axis: 'y',}), //hetzelfde als hierboven maar dan in de y as.
    																			//De grote van de grid bepaald waar de center is. En de grid word
    																			//van het midden naar buiten geanimeerd.
 		scale: [
	{value: 0, duration: 400, easing: 'easeOutSine'},//Hier veranderen de blokken van groote in dit geval van 0 naar 1 waar 1 de orginele grote is.
	{value: 1, duration: 400, easing: 'easeInQuad'},//De tijd voor deze transformatie is 400ms voor het verkleinen en het vergroten dus 800ms in totaal.
	],												//De easing is de manier waarop deze animatie word afgespeeld, alle verschillende soorten easings staan hier: https://codepen.io/kcjpop/pen/GvdQdX en https://easings.net/
 	rotate: anime.stagger(450, {grid: [31, 12], from: 'center', axis: 'x',}),//Dit zorgt ervoor dat alle blokken met 450 graden draaien
  	rotate: anime.stagger(450, {grid: [31, 12], from: 'center', axis: 'y',}),
	delay: anime.stagger(100, {grid: [31, 13], from: 'center'}),	//dit zorgt ervoor dat er wat tijd tussen elke blokanimatie zit. 
});

//animatie voor mijn naam
var animation2 = anime({
	targets: '#name path' ,//target de path in de html file
	strokeDashoffset: [anime.setDashoffset,0],//strokeDashofset is de lijn die word geanimeerd. De lijn word steeds langer gemaakt.
	easing: 'easeInOutQuad', //De easing van de animatie alle soorten easings staan hier: https://codepen.io/kcjpop/pen/GvdQdX en https://easings.net/
	duration: 1200,//de tijd van hoelang de animatie duurt
	direction: 'alternate',//als de animatie klaar is speelt hij de animatie weer af maar dan in reverse.
	delay: 600,//simpel gezegd een delay van hoelang de animatie moet wachten totdat die start. In dit geval 600ms.
});

//fade voor animatie1 
 var animation3 = anime({
	targets:'.box',	//target de css element .block
	delay: 1400, //simpel gezegd een delay van hoelang de animatie moet wachten totdat die start. In dit geval 1400ms.
	easing: 'easeInOutQuad',//De easing van de animatie alle soorten easings staan hier: https://codepen.io/kcjpop/pen/GvdQdX en https://easings.net/
	opacity: [1,0],//de opacity verandert van 1 zichtbaar naar 0 ontzichtbaar.
});

//animatie voor de twee knoppen
var animation4 = anime({
	targets: '#button',//target de buttons
	opacity: [0, 1],//de opacity verandert van 1 zichtbaar naar 0 ontzichtbaar.
	easing: 'easeInOutQuad',//De easing van de animatie alle soorten easings staan hier: https://codepen.io/kcjpop/pen/GvdQdX en https://easings.net/
	delay: 2500, //simpel gezegd een delay van hoelang de animatie moet wachten totdat die start. In dit geval 2500ms.
});

//restart al de animaties
function animateRestart() {
  animation1.restart();
  animation2.restart();
  animation3.restart();
  animation4.restart();
}
document.querySelector('.replay').onclick = animateRestart;


