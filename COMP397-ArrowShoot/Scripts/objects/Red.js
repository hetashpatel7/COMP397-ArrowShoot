var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Red Balloon Class ++++++++++++++++++++++++++++++++++++++
    var Red = (function (_super) {
        __extends(Red, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Red(imageString) {
            _super.call(this, imageString);
            this.name = "Red";
            this.sound = "";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Red.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        };
        Red.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 810) + 750; // start balloon at random location
            this.y = -this.height; // start balloon off stage
            this.dy = Math.floor(Math.random() * 3) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Red.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x -= 1; // drifts cloud right and left
            this.checkBounds();
        };
        return Red;
    })(objects.GameObject);
    objects.Red = Red;
})(objects || (objects = {}));
//# sourceMappingURL=Red.js.map