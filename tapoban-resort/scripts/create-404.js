const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'tapoban-resort');
const filePath = path.join(distDir, '404.html');

const content = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=/tapoban-resort/" />
    <script>
      // If refresh doesn't work, use JavaScript to load the index and let the SPA handle the route
      (function () {
        var pathname = window.location.pathname;
        var origin = window.location.origin || (window.location.protocol + '//' + window.location.host);
        var index = origin + '/tapoban-resort/';
        window.location.replace(index + window.location.search + window.location.hash);
      })();
    </script>
    <title>Redirecting...</title>
  </head>
  <body>
    Redirecting to <a href="/tapoban-resort/">app</a>...
  </body>
</html>`;

try {
  if (!fs.existsSync(distDir)) {
    console.error('dist folder not found: ' + distDir);
    process.exit(1);
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Created 404.html in', filePath);
} catch (err) {
  console.error(err);
  process.exit(1);
}
