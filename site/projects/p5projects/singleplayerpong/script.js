function setup(){
    Sx = windowWidth;
    Sy = windowHeight;
    score = 0;
    createCanvas(Sx,Sy)
    datashow=0;

    inc =0;
    diff =1.5;

    highscore= 0;

    paddle = new paddle();
    ball = new ball();
    rectMode(CENTER);
}

function draw(){
    background(8,30,18);

    textAlign(LEFT);
    fill(255);
    textSize(50);
    text("score " +score,Sx/64,Sy/12)
    text("highscore " +highscore,Sx/64,Sy/7)

  //  
  //  text("ball vel x " +ball.vel.x,Sx/64,Sy/5)
  //  text("ball vel y " +ball.vel.y,Sx/64,Sy/4)
    paddle.render();
    paddle.move();
    paddle.coll();

    ball.render();
    ball.update();
    ball.coll();
    ball.reset();
    ball.speedup();

    data();


}


function data() {
	if (datashow==1) {
		text("paddle vel " +paddle.vel,Sx/64,Sy/3);
		text("ball vel x " +ball.vel.x,Sx/64,Sy/5);
		text("ball vel y " +ball.vel.y,Sx/64,Sy/4);
		text("diff " +diff,Sx/64,Sy)
	}
  if (keyCode === 79) {
  	datashow=1;
}
  if (keyCode === 80) {
  	datashow=0;
}
}

function paddle(){
	noStroke();
	this.w = Sx/8;
	this.h = Sy/64;
	this.pos = createVector(Sx/2,Sy-Sy/32);
	this.vel = 12;
	this.roundness = 6;

	this.render = function(){
		rect(this.pos.x, this.pos.y, this.w, this.h , this.roundness);
	}

	this.update =function(vel){
		this.pos.x +=vel*this.vel;
	}
	this.move = function(){
	if (keyIsDown(65)||keyIsDown(37)) {
		this.update(-1);
	}
	if (keyIsDown(68)||keyIsDown(39)) {
	this.update(1);
	}

}

	this.coll =function(){
		if (this.pos.x < (this.w/2) ) {
			this.pos.x = this.w/2;
		}
		if (this.pos.x > Sx-this.w/2) {
			this.pos.x = Sx-this.w/2;
		}

	}


}

function ball(){
	noStroke();
	this.r = Sx/64;
	this.pos = createVector(Sx/2,Sy/2);
	this.vel = createVector(0, 7);
	this.render = function(){
		ellipse(this.pos.x, this.pos.y, this.r, this.r)
	}

	this.update = function(){
	this.pos.x += this.vel.x;
	this.pos.y += this.vel.y;
	}

	this.coll =function(){
		if (this.pos.x < 0 || this.pos.x > Sx) {
			this.vel.x *= -1;
		}
		if (this.pos.y < 0) {
			this.vel.y *= -1;
		}

		if (this.pos.y >= paddle.pos.y-paddle.h && this.pos.x < paddle.pos.x +paddle.w/2 && this.pos.x > paddle.pos.x -paddle.w/2){
            this.vel.y = random(-5,-10);
            this.vel.x = -random([-10,-9,-8,-7,7,8,9,10]);

            score++;
            inc++;
        if (score > highscore) {
        	highscore = score;
        }
	}
	this.speedup =function(){
		if (inc == 1) {
			inc=0;
			this.vel.x *= diff;
			this.vel.y *= diff; 
			paddle.vel = this.vel.x*this.vel.x*0.12;
		}

	
	}
}

	  this.reset = function() {
   if (this.pos.y >= Sy) {
    score =0;
    inc=0;
	this.vel = createVector(0, 7);
    this.pos = createVector(Sx/2,Sy/2)
    paddle.vel = 12;
   }
  }
}


