# url-query-tools

Simple functions to parse JS objects into URL query strings and back.


## Usage

Use `getQuery` to turn a JS object into a URL query string:

```
import { getQuery } from "url-query-tools"

let formValues = {
  name: "Foo",
  followers: [1, 2, 3],
}

let query = getQuery(formValues)
```

Use `parseQuery` to turn a URL query string into a JS object.

```
import { parseQuery } from "url-query-tools"

let query = `?name=Foo&followers=1&followers=2&followers=3`

let formValues = parseQuery(query)
```
