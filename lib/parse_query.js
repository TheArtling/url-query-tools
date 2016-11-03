"use strict";

exports.__esModule = true;
exports.parseQuery = parseQuery;
/**
 * Turns a URL query string into a JS object.
 *
 * If the query string has several values for the same key, we expect it to be
 * of the form `&key=1&key=2` and NOT of the form `&key=1,2`.
 *
 * @param {string} query - The query string that should be parsed
 */
function parseQuery(query) {
  var result = {};
  query = query.replace("?", "");
  query = query.split("&");
  query.forEach(function (item, index) {
    if (item) {
      var key_value = item.split("=");
      var value = decodeURIComponent(key_value[1]);
      if (result[key_value[0]]) {
        if (result[key_value[0]] instanceof Array) {
          result[key_value[0]].push(value);
        } else {
          result[key_value[0]] = [result[key_value[0]]];
          result[key_value[0]].push(value);
        }
      } else {
        result[key_value[0]] = value;
      }
    }
  });
  return result;
}