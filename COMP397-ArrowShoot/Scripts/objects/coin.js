var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    var coin = (function (_super) {
        __extends(coin, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function coin(imageString) {
            _super.call(this, imageString);
            this.name = "coin";
            this.sound = "thunder";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        coin.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        };
        coin.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 810) + 750; // start cloud at random location
            this.y = -this.height; // start cloud off stage
            this.dy = Math.floor(Math.random() * 3) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        coin.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x -= 1; // drifts cloud right and left
            this.checkBounds();
        };
        return coin;
    })(objects.GameObject);
    objects.coin = coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map