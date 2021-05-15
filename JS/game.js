class Game {
    constructor() { }

    getState() {
        var dbref = database.ref("gameState");
        dbref.on("value", function (data) {
            gameState = data.val()
        })
    }
    updateState(state) {
        database.ref("/").update({ gameState: state })
    }

    startGame() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            kar1 = createSprite(100, 200)
            kar1.addImage(kar1Img)
            kar2 = createSprite(300, 200)
            kar2.addImage(kar2Img)
            kar3 = createSprite(500, 200)
            kar3.addImage(kar3Img)
            kar4 = createSprite(700, 200)
            kar4.addImage(kar4Img)
            kars = [kar1, kar2, kar3, kar4]
        }
    }

    play() {
        form.hideForm()
        //textSize(30);
        //text("Start the Game", 120, 100)
        Player.getPlayerInfo()
       
        if (allplayers !== undefined) {
            image(TrackImg, 0, -height*4, width, height*5);
            drawSprites();
            var index = 0;
            var x = 500;
            var y = height;
           
            for (var plr in allplayers) {
                index = index + 1
              
                y = height - allplayers[plr].Distance
                
                kars[index - 1].x = x
                kars[index - 1].y = y
                if (index === player.index) {
                    kars[index - 1].shapeColor = "red"
                    camera.position.y = kars[index - 1].y;
                    camera.position.x = width/2
                }
                else {
                    kars[index - 1].shapeColor = "black"

                }
                x = x + 300

            }
            if (keyIsDown(UP_ARROW) && player.index !== null) {
                player.distance += 50;
                player.update();
                console.log(player.distance);
                if(player.distance >= 3860)
                {
                  gameState = 2;
                }
            }
        }

    }
    end()
    {
      textSize(30);
      text("Game Has Ended, YOU SHALL WAIT", width/2, camera.position.y); 
    }

}