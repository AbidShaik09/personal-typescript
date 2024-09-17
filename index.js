"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 50;
var s = "hello";
var an = ["hello", "yellow", a];
var stock = /** @class */ (function () {
    function stock(code, company, rate) {
        this.code = code;
        this.company = company;
        this.rate = rate;
    }
    stock.prototype.store = function () {
        console.log(this.code + " company: " + this.company + " rate: " + this.rate);
    };
    return stock;
}());
exports.default = stock;
