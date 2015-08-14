module objects {
    // Arrow Class ++++++++++++++++++++++++++++++++++++++
   
    export class Arrow extends objects.GameObject {
         
         
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
         
        constructor(imageString: string) {
            super(imageString);

            this.x = 153;

        }
        public changeClick(): void {

            this.x += 500;



        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(started: string, isClicked: string, bowY: number, bowHeight: number): void {

            this.y = stage.mouseY;


            if (started == "true") {
                if (isClicked == "true") {
                    this.x += 10;
                    if (this.x > 1454) {
                        this.x = 153;
                        resetArrow();

                    }
                }
            }





        }
    }
}