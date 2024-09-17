"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var mutualFunds = /** @class */ (function (_super) {
    __extends(mutualFunds, _super);
    function mutualFunds(code, company, rate) {
        return _super.call(this, code, company, rate) || this;
    }
    mutualFunds.prototype.display = function () {
        this.rate = 0;
        this.store();
    };
    return mutualFunds;
}(index_1.default));
function testFlats(f) {
    console.log(f.area + " " + f.location + " " + f.saleAmount);
}
function testFlat(f) {
    console.log(f.area + " " + f.location + " " + f.saleAmount);
}
testFlat({ area: 12, location: "hyd", saleAmount: 300 });
testFlats({ area: 12, location: "hyd", saleAmount: 300 });
var s = new mutualFunds(12, "tata", 12);
s.display();
