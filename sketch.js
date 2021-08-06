var boy,boyImg
var apple,appleImg, appleG
var cake, cakeImg, cakeG
var play
var end
var gamestate
var score = 0

function preload(){
boyImg = loadImage("boy.png")
appleImg = loadImage("apple.png")
cakeImg = loadImage("cake.png")
}

function setup() {
 createCanvas(600,600)

 boy = createSprite(550,550,30,30)
 boy.addImage("boyimg",boyImg)
boy.scale = 0.45

appleG = createGroup();
cakeG = createGroup();
}

function draw() {
background(255)

if(gamestate === play){
boy.y = World.mouseY
spawn_Apples();
spawn_Cake();
}

if(boy.isTouching(appleG)){
score = score+1
appleG.destroyEach();
}

if(boy.isTouching(cakeG)){
    gamestate = end
    boy.y = 550
    boy.x = 550
    appleG.destroyEach();
    cakeG.destroyEach();
    score = 0
}

 drawSprites();
 textSize(25)
 text("Score: "+ score,30,30)
}

function spawn_Apples(){
if(World.frameCount%120 === 0){
apple = createSprite(40,random(50,560),20,20)
apple.addImage("a",appleImg)
apple.velocityX = 7
apple.scale = 0.1
apple.lifetime = 150
appleG.add(apple)
}
}

function spawn_Cake(){
if(World.frameCount%130 === 0){
cake  = createSprite(40,random(50,560),20,20)
cake.addImage("c",cakeImg)
cake.velocityX = 7
cake.scale = 0.2
cake.lifetime = 120
cakeG.add(cake) }
}