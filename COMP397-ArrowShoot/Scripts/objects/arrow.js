var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // hero Class ++++++++++++++++++++++++++++++++++++++
    var arrow = (function (_super) {
        __extends(arrow, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function arrow(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this.x = 50;
            this.y = 50;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        arrow.prototype.changeClick = function () {
            this.x += 500;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        arrow.prototype.update = function (started, isClicked) {
            this.y = stage.mouseY; // position hero under mouse
            if (started == "true") {
                if (isClicked == "true")
                    this.x += 10;
            }
        };
        return arrow;
    })(objects.GameObject);
    objects.arrow = arrow;
})(objects || (objects = {}));
//# sourceMappingURL=arrow.js.map