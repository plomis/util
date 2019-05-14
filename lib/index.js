"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addEventListener = _interopRequireDefault(require("./Dom/addEventListener"));

var _css = require("./Dom/css");

var _animation = require("./Dom/animation");

var util = {
  addEventListener: _addEventListener.default,
  requestAnimationFrame: _animation.requestAnimationFrame,
  cancelAnimationFrame: _animation.cancelAnimationFrame,
  getClientSize: _css.getClientSize,
  getOffset: _css.getOffset
};
var _default = util;
exports.default = _default;
module.exports = exports["default"];