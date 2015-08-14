module objects {
    // bomb Class ++++++++++++++++++++++++++++++++++++++
    export class bomb extends objects.GameObject {
        gameObject1: objects.GameObject;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "bomb";
            this.sound = "";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if bomb has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = Math.floor(Math.random() * 810) + 750;// start bomb at random location
            this.y = -this.height; // start bomb off stage
            this.dy = Math.floor(Math.random() * 3) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;



        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves bomb down the stage
            this.x -= 1; // drifts bomb right and left
            this.checkBounds();
        }
    }
}  