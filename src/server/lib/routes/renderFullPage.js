export default function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
    <head>
      <title>SSR React App</title>
    </head>
    <body>
      <div>id="root"${html.info}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;
}