
var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;
var allplayers;
var kar1, kar2, kar3, kar4;
var kars;
var kar1Img, kar2Img, kar3Img ,kar4Img,TrackImg;


function preload()
{
  kar1Img = loadImage("images/car1.png")
  kar2Img = loadImage("images/car2.png")
  kar3Img = loadImage("images/car3.png")
  kar4Img = loadImage("images/car4.png")
  TrackImg = loadImage("images/track.jpg")
}

function setup() {
    createCanvas(windowWidth-40, windowHeight-20);


    database = firebase.database()
    game = new Game()
    game.getState()
    game.startGame()

}



function draw() {
    background("white");
    console.log("plyr count" + playerCount)
    if (playerCount === 4) {
        game.updateState(1);
    }

    if (gameState === 1) {
        game.play();
    }

    if(gameState === 2)
    {
        game.end();
    }

}

