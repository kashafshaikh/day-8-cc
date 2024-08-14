"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
var circle = /** @class */ (function () {
    function circle(radius) {
        this.name = 'Circle',
            this.radius = radius;
        this.area = this.CalculateArea();
    }
    circle.prototype.CalculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return circle;
}());
exports.circle = circle;
