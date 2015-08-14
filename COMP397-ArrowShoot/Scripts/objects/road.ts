module objects {
    // Road Class ++++++++++++++++++++++++++++++++++++++
    export class road extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if road has left screen
            if (this.x+1200 == 0)
                this.reset();
        }


        private reset(): void {
            
            this.y = 0;
            this.x =0; // reset road off screen
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves road left to right of the stage
            console.log("" + this.x);

            this.checkBounds();
        }
    }
}  