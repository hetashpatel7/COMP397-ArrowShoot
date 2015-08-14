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
          
            p1.x = Arrow.x;
            p1.y = Arrow.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;


            if (utility.distance(p1, p2) < ((Arrow.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "balloon") {//if arrow hits the balloon then remove reset balloon
                       // stage.removeChild(gameObject);
                        stage.removeChild(gameObject);
                        gameObject.y = -400;
                        stage.addChild(gameObject);
                        
                        scoreboard.score += 100;
                      //  scoreboard.obj -= 1;
                                                stage.update();
                    }
                    if (gameObject.name == "Red")
                    {//if arrow hits the Red balloon then remove reset balloon
                      

                        stage.removeChild(gameObject);
                        gameObject.y = -600;
                        stage.addChild(gameObject);

                        scoreboard.score -= 100;
                       // stage.removeChild(gameObject);
                    //   resetArrow();
                        stage.update();
                    }
                    if (gameObject.name == "bomb") {//If arrow hits the bomb then go to game over screen
                                endScreen();
                     stage.update();
                    }
            
                }
                gameObject.isColliding = true;
                if (scoreboard.score == 700 && scoreboard.lives != 0) {//call second level function 
                    secondLevel();
                     
                }
                if (scoreboard.score == 1400 && scoreboard.lives != 0)//call 3rd level function
                {
                thirdLevel();
                     
                }
              
                
                if (scoreboard.lives == 0)
                    endScreen();
              
            }
            else {
                gameObject.isColliding = false;
        /*        if (scoreboard.obj == 1) {
                    stage.addChild(gameObject);
                    scoreboard.obj += 1;*/


                }
            }


        }
    }
