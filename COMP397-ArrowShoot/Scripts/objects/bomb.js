var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // bomb Class ++++++++++++++++++++++++++++++++++++++
    var bomb = (function (_super) {
        __extends(bomb, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function bomb(imageString) {
            _super.call(this, imageString);
            this.name = "bomb";
            this.sound = "";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        bomb.prototype.checkBounds = function () {
            // check if bomb has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        };
        bomb.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 810) + 750; // start bomb at random location
            this.y = -this.height; // start bomb off stage
            this.dy = Math.floor(Math.random() * 3) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        bomb.prototype.update = function () {
            this.y += this.dy; // moves bomb down the stage
            this.x -= 1; // drifts bomb right and left
            this.checkBounds();
        };
        return bomb;
    })(objects.GameObject);
    objects.bomb = bomb;
})(objects || (objects = {}));
//# sourceMappingURL=bomb.js.map