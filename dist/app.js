"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuesto["default"](5000, 20);
var cliente1 = new _cliente["default"]('oscar', impuesto1);
var impuesto2 = new _impuesto["default"](1000, 10);
var cliente2 = new _cliente["default"]('Pedro', impuesto2);
console.log(cliente1.nombre);
console.log(cliente1.calcularImpuesto());
console.log(impuesto1);
console.log(cliente2.nombre);
console.log(cliente2.calcularImpuesto());
console.log(impuesto2);