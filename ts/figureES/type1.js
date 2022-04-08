"use strict";
exports.__esModule = true;
exports.SimpleMath = exports.Triangle = exports.Rectangle = exports.Square = exports.FIGUREGEOMETRICHE = void 0;
var FIGUREGEOMETRICHE;
(function (FIGUREGEOMETRICHE) {
    FIGUREGEOMETRICHE[FIGUREGEOMETRICHE["QUADRATO"] = 0] = "QUADRATO";
    FIGUREGEOMETRICHE[FIGUREGEOMETRICHE["RETTANGOLO"] = 1] = "RETTANGOLO";
    FIGUREGEOMETRICHE[FIGUREGEOMETRICHE["TRIANGOLO"] = 2] = "TRIANGOLO";
})(FIGUREGEOMETRICHE = exports.FIGUREGEOMETRICHE || (exports.FIGUREGEOMETRICHE = {}));
var Square = /** @class */ (function () {
    function Square(lato) {
        this.geometry = FIGUREGEOMETRICHE.QUADRATO;
        this.lato = lato;
    }
    Square.prototype.getGeometry = function () {
        return this.geometry;
    };
    Square.prototype.getLato = function () {
        return this.lato;
    };
    return Square;
}());
exports.Square = Square;
var Rectangle = /** @class */ (function () {
    function Rectangle(base, height) {
        this.geometry = FIGUREGEOMETRICHE.RETTANGOLO;
        this.base = base;
        this.height = height;
    }
    Rectangle.prototype.getGeometry = function () {
        return this.geometry;
    };
    Rectangle.prototype.getBase = function () {
        return this.base;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.geometry = FIGUREGEOMETRICHE.TRIANGOLO;
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getGeometry = function () {
        return this.geometry;
    };
    Triangle.prototype.getBase = function () {
        return this.base;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calcoloArea = function (o, geometry) {
        var lato;
        var lato2;
        if (geometry == FIGUREGEOMETRICHE.QUADRATO) {
            var areaquadrato = void 0;
            lato = o.getLato;
            areaquadrato = lato * lato;
            return areaquadrato;
        }
        else if (geometry == FIGUREGEOMETRICHE.RETTANGOLO) {
            var arearettangolo = void 0;
            lato = o.getBase;
            lato2 = o.getHeight;
            arearettangolo = lato * lato2;
            return arearettangolo;
        }
        else if (geometry == FIGUREGEOMETRICHE.TRIANGOLO) {
            var areareatriangolo = void 0;
            lato = o.getBase;
            lato2 = o.getHeight;
            areareatriangolo = lato * lato2 / 2;
            return areareatriangolo;
        }
    };
    return SimpleMath;
}());
exports.SimpleMath = SimpleMath;
