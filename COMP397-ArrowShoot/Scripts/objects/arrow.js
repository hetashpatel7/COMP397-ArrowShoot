var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Arrow Class ++++++++++++++++++++++++++++++++++++++
    var Arrow = (function (_super) {
        __extends(Arrow, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Arrow(imageString) {
            _super.call(this, imageString);
            this.x = 153;
        }
        Arrow.prototype.changeClick = function () {
            this.x += 500;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Arrow.prototype.update = function (started, isClicked, bowY, bowHeight) {
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
        };
        return Arrow;
    })(objects.GameObject);
    objects.Arrow = Arrow;
})(objects || (objects = {}));
//# sourceMappingURL=arrow.js.map