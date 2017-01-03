[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]

<div align="center">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>LiveReload Plugin</h1>
  <p>PostHTML plugin for injecting a script tag for LiveReload.</p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-livereload
```

<h2 align="center">Usage</h2>

## Options

###### Default
```html
<script src="//localhost:35729/livereload.js?snipver=1" async defer></script>
```

###### {hostname: '0.0.0.0', port: 5309, path: '/lr.js'}
```html
<script src="//0.0.0.0:5309/lr.js" async defer></script>
```

<h2 align="center">Example</h2>

```js
const posthtml = require('posthtml');

const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Wow</title>
  </head>
  <body>
    <div class="button">
      <div class="button__text">Text</div>
    </div>
  </body>
</html>
`;

posthtml([
    require('posthtml-livereload')({
        hostname: '0.0.0.0',
        port: 5309,
        path: '/lr.js'
    })
])
    .process(html)
    .then(result => console.log(result.html));
```

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Wow</title>
  </head>
  <body>
    <div class="button">
      <div class="button__text">Text</div>
    </div>

<script src="//0.0.0.0:5309/lr.js" async defer></script>
  </body>
</html>
```

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

> Copyright (c) 2017 Chris Van Wiemeersch

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-livereload.svg
[npm-url]: https://npmjs.com/package/posthtml-livereload

[deps]: https://david-dm.org/posthtml/posthtml-livereload.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-livereload

[travis]: http://img.shields.io/travis/posthtml/posthtml-livereload.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-livereload

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-livereload/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-livereload?branch=master
