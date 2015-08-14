var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // bowArrow Class ++++++++++++++++++++++++++++++++++++++
    var bowArrow = (function (_super) {
        __extends(bowArrow, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function bowArrow(imageString) {
            _super.call(this, imageString);
            this.sound = "";
            this.x = 153;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        bowArrow.prototype.update = function () {
            this.y = stage.mouseY; // position Arrow under mouse
        };
        return bowArrow;
    })(objects.GameObject);
    objects.bowArrow = bowArrow;
})(objects || (objects = {}));
//# sourceMappingURL=bowarrow.js.map