module objects {
    // hero Class ++++++++++++++++++++++++++++++++++++++
   
    export class hero extends objects.GameObject {
         
         
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
         
        constructor(imageString: string) {
            super(imageString);
            this.sound = "engine";

            this.x = 100;

            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        public changeClick(): void {

            this.x += 500;



        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(started: string, isClicked: string): void {
            
                this.y = stage.mouseY; // position hero under mouse
            

                if (started == "true") {
                    if (isClicked == "true") {
                        this.x += 10;
                        if (this.x > 1454) {
                            this.x = 100;
                            resetArrow();
                            
                        }
                    }
                }

            



        }
    }
}