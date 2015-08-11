module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++
      
        constructor() {
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between plane and any other game object
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
          
            p1.x = hero.x;
            p1.y = hero.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;


            if (utility.distance(p1, p2) < ((hero.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "car") {
                        stage.removeChild(gameObject);
                        scoreboard.score += 100;
                        scoreboard.obj -= 1;
                                                stage.update();
                    }
                    if (gameObject.name == "coin")
                    {
                        scoreboard.score -= 100;
                        stage.removeChild(gameObject);
                    //   resetArrow();
                        stage.update();
                    }
                    if (gameObject.name == "bomb") {
                       // alert("bomb");
                        endScreen();
                     stage.update();
                    }
            
                }
                gameObject.isColliding = true;
                if (scoreboard.score == 700 && scoreboard.lives != 0) {
                    secondLevel();
                     
                }
                if (scoreboard.score == 1800 && scoreboard.lives != 0)
                {
                thirdLevel();
                     
                }
              
                
                if (scoreboard.lives == 0)
                    endScreen();
              
            }
            else {
                gameObject.isColliding = false;
                if (scoreboard.obj == 1) {
                    stage.addChild(gameObject);
                    scoreboard.obj += 1;


                }
            }


        }
    }
}