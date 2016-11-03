/**
 * Turns a URL query string into a JS object.
 *
 * If the query string has several values for the same key, we expect it to be
 * of the form `&key=1&key=2` and NOT of the form `&key=1,2`.
 *
 * @param {string} query - The query string that should be parsed
 */
export function parseQuery(query) {
  let result = {}
  query = query.replace("?", "")
  query = query.split("&")
  query.forEach((item, index) => {
    if (item) {
      let key_value = item.split("=")
      let value = decodeURIComponent(key_value[1])
      if (result[key_value[0]]) {
        if (result[key_value[0]] instanceof Array) {
          result[key_value[0]].push(value)
        } else {
          result[key_value[0]] = [result[key_value[0]], ]
          result[key_value[0]].push(value)
        }
      } else {
        result[key_value[0]] = value
      }
    }
  })
  return result
}
