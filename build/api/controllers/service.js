"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../../sequelize/models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Service = _models["default"].Service;
/**
 * @author Diane Mahoro
 * @class Services
 * @description this class performs the whole service
 */

var Services =
/*#__PURE__*/
function () {
  function Services() {
    _classCallCheck(this, Services);
  }

  _createClass(Services, null, [{
    key: "createService",

    /**
     *
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     * @returns {Object} - Response object
     */
    value: function () {
      var _createService = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, title, description, image, data, response, newService;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, title = _req$body.title, description = _req$body.description, image = _req$body.image;
                data = {
                  title: title,
                  description: description,
                  image: image
                };
                _context.next = 4;
                return Service.findAll({
                  where: {
                    title: title
                  }
                });

              case 4:
                response = _context.sent;

                if (response[0]) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return Service.create({
                  title: data.title,
                  description: data.description,
                  image: data.image
                });

              case 8:
                newService = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  data: newService,
                  message: 'Service created successfully'
                }));

              case 10:
                res.status(409).json({
                  message: 'the service already exists'
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createService(_x, _x2) {
        return _createService.apply(this, arguments);
      }

      return createService;
    }()
    /**
     *
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     * @returns {Object} - Response object
     */

  }, {
    key: "getAllServices",
    value: function () {
      var _getAllServices = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var allServices;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Service.findAll();

              case 2:
                allServices = _context2.sent;

                if (allServices[0]) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.status(404).send({
                  error: 'Whoops! No Service found!'
                }));

              case 5:
                res.status(200).send({
                  articles: allServices
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllServices(_x3, _x4) {
        return _getAllServices.apply(this, arguments);
      }

      return getAllServices;
    }()
  }]);

  return Services;
}();

var _default = Services;
exports["default"] = _default;
//# sourceMappingURL=service.js.map