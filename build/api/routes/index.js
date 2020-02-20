"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _services = _interopRequireDefault(require("../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _express["default"])();
api.use('/service', _services["default"]);
var _default = api;
exports["default"] = _default;
//# sourceMappingURL=index.js.map