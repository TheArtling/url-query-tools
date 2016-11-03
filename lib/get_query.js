"use strict";

exports.__esModule = true;
exports.getQuery = getQuery;

var _forIn = require("lodash/forIn");

var _forIn2 = _interopRequireDefault(_forIn);

var _trimStart = require("lodash/trimStart");

var _trimStart2 = _interopRequireDefault(_trimStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Turns a JS object into a URL query string
 *
 * The object can have keys with values of type array, i.e.
 *
 * let myObj = {
 *   gallery: [1, 2, 3]
 * }
 *
 * The resulting string would be `?gallery=1&gallery=2&gallery3`
 *
 * @param {object} values - The JS object that should be converted
 * @param {bool} first - If `true`, then the leading `?` will be replaced with
 *  a `&`. This is useful when you want to append this query string to another
 *  already existing query string.
 */
function getQuery(values, first) {
  var result = "";
  var keys = [];
  (0, _forIn2.default)(values, function (value, key) {
    keys.push(key);
  });
  keys.sort();

  keys.forEach(function (key, index) {
    if (values[key] instanceof Array) {
      values[key].forEach(function (item, index) {
        result += "&" + key + "=" + encodeURIComponent(item);
      });
    } else {
      result += "&" + key + "=" + encodeURIComponent(values[key]);
    }
  });

  if (result && first !== false) {
    result = (0, _trimStart2.default)(result, "&");
    result = "?" + result;
  }
  return result;
}