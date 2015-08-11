module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class car extends objects.GameObject {
        gameObject1: objects.GameObject;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "car";
            this.sound = "";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = Math.floor(Math.random() * 810) + 750;// start cloud at random location
            this.y = -this.height; // start cloud off stage
           this.dy = Math.floor(Math.random() * 3) + 5;
           this.dx = Math.floor(Math.random() * 4) - 2;


           
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves cloud down the stage
            this.x -=1 ; // drifts cloud right and left
            this.checkBounds();
        }
    }
}  