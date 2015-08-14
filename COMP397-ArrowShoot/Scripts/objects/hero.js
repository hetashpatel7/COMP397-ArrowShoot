var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // hero Class ++++++++++++++++++++++++++++++++++++++
    var hero = (function (_super) {
        __extends(hero, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function hero(imageString) {
            _super.call(this, imageString);
            this.x = 153;
        }
        hero.prototype.changeClick = function () {
            this.x += 500;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        hero.prototype.update = function (started, isClicked, bowY, bowHeight) {
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
        return hero;
    })(objects.GameObject);
    objects.hero = hero;
})(objects || (objects = {}));
//# sourceMappingURL=hero.js.map