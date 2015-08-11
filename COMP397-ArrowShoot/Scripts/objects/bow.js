var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // hero Class ++++++++++++++++++++++++++++++++++++++
    var bow = (function (_super) {
        __extends(bow, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function bow(imageString) {
            _super.call(this, imageString);
        }
        bow.prototype.changeClick = function () {
            this.x += 500;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        bow.prototype.update = function (started, isClicked) {
            //  this.y = stage.mouseY; // position hero under mouse
            if (started == "true") {
                if (isClicked == "true")
                    this.x += 10;
            }
        };
        return bow;
    })(objects.GameObject);
    objects.bow = bow;
})(objects || (objects = {}));
//# sourceMappingURL=bow.js.map