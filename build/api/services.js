"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _service = _interopRequireDefault(require("./controllers/service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var createService = _service["default"].createService,
    getAllServices = _service["default"].getAllServices;
router.post('/', createService);
router.get('/', getAllServices);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=services.js.map