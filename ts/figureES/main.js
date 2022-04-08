"use strict";
exports.__esModule = true;
var type1_1 = require("./type1");
var type_1 = require("./type");
var main = /** @class */ (function () {
    function main() {
        this.square = new type1_1.Square(2);
        this.rectangle = new type1_1.Rectangle(2, 9);
        this.triangle = new type1_1.Triangle(3, 3);
        this.sm = new type1_1.SimpleMath();
    }
    main.prototype.printSquare = function () {
        console.log("Area quadrato: " + this.sm.calcoloArea(this.square, type_1.FIGUREGEOMETRICHE.QUADRATO));
    };
    main.prototype.printRectangle = function () {
        console.log("Area rettangolo: " + this.sm.calcoloArea(this.rectangle, type_1.FIGUREGEOMETRICHE.RETTANGOLO));
    };
    main.prototype.printTriangle = function () {
        console.log("Area triangolo: " + this.sm.calcoloArea(this.triangle, type_1.FIGUREGEOMETRICHE.TRIANGOLO));
    };
    return main;
}());
