var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Road Class ++++++++++++++++++++++++++++++++++++++
    var road = (function (_super) {
        __extends(road, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function road(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        road.prototype.checkBounds = function () {
            // check if road has left screen
            if (this.x + 1200 == 0)
                this.reset();
        };
        road.prototype.reset = function () {
            this.y = 0;
            this.x = 0; // reset road off screen
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        road.prototype.update = function () {
            this.x -= this.dx; // moves road left to right of the stage
            console.log("" + this.x);
            this.checkBounds();
        };
        return road;
    })(createjs.Bitmap);
    objects.road = road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map