import forIn from "lodash/forIn"
import trimStart from "lodash/trimStart"


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
export function getQuery(values, first) {
  let result = ""
  let keys = []
  forIn(values, (value, key) => { keys.push(key) })
  keys.sort()

  keys.forEach((key, index) => {
    if (values[key] instanceof Array) {
      values[key].forEach((item, index) => {
        result += `&${key}=${encodeURIComponent(item)}`
      })
    } else {
      result += `&${key}=${encodeURIComponent(values[key])}`
    }
  })

  if (result && first !== false) {
    result = trimStart(result, "&")
    result = "?" + result
  }
  return result
}
