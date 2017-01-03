var posthtml = require('posthtml');
var lr = require('./index');

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
    lr({
        hostname: '0.0.0.0',
        port: 5309,
        path: '/lr.js'
    })
])
    .process(html)
    .then(result => console.log(result.html));
