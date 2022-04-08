"use strict";
exports.__esModule = true;
exports.RecordsImpl = void 0;
var RecordsImpl = /** @class */ (function () {
    function RecordsImpl(_a) {
        var id = _a.id, name = _a.name, age = _a.age, description = _a.description;
        this.record.id = id;
        this.record.name = name;
        this.record.age = age;
        this.record.description = description;
    }
    RecordsImpl.prototype.printData = function () {
        this.record = this.loadRecord(null);
    };
    RecordsImpl.prototype.loadRecord = function (record) {
        record.id = "1";
        record.name = "Californication";
        record.age = 12;
        record.description = "Red Hot Chili Peppers Californication";
        return record;
    };
    return RecordsImpl;
}());
exports.RecordsImpl = RecordsImpl;
