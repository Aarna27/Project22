var starImg, fairyImg, bgImg,extraStar, extraStarImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("starImage.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");
	extraStarImg = loadImage("star.png");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130,520,20,20);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;

	star = createSprite(680,50);
    star.addImage(starImg);
	star.scale = 0.1;

	extraStar = createSprite(270,510,20,20);
	extraStar.addImage(extraStarImg);
	extraStar.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	
	World.add(world, starBody);
	
	Engine.run(engine);
}


function draw() {
background(bgImg);

if(fairy.y = 520){
fairy.velocityX = 0;
extraStar.velocityX=0;
}

if(extraStar.isTouching(star)){
star.velocity = 0;
}
drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW)
	{
	star.velocityY = 7;
	}

	if(keyCode === RIGHT_ARROW)
	{
	fairy.velocityX = 20;
	}

	if(keyCode === LEFT_ARROW)
	{
	fairy.velocityX = -20;
	}

	if (keyCode === RIGHT_ARROW)
	{
	extraStar.velocityX = 20;
	}

	if (keyCode === LEFT_ARROW)
	{
	extraStar.velocityX = -20;
	}
}
