module objects {
    // bowArrow Class ++++++++++++++++++++++++++++++++++++++
   
    export class bowArrow extends objects.GameObject {
         
         
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
         
        constructor(imageString: string) {
            super(imageString);
            this.sound = "";

            this.x = 153;

            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y = stage.mouseY; // position Arrow under mouse
            
        }
    }
}