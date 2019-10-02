# Requires all requests to be relative to their current context path 

A relative reference that begins with a single slash character is termed an absolute-path reference. (https://www.ietf.org/rfc/rfc3986.txt)

Links using absolute-path references will break if the application is not deployed on the root context. This rule will emit a warning if code contains string literals with absolute-path references.


## Rule Details

Examples of **incorrect** code for this rule:

```js

let s = '/foo/bar/blah.txt'

```

Examples of **correct** code for this rule:

```js

let s = '../bar/blah.txt'
let s = './bar/blah.txt'
let s = 'bar/blah.txt'

```

## Further Reading

https://serverfault.com/a/561897 
