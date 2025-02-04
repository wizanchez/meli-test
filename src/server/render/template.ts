export const template = (
  html?: string,
  initialProps = {},
  style = ""
): string => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="/static/styles/main.css">
    <title>.: Meli by @wizanchez</title>
      <meta name="description" content="Test Mercado libre by @wizanchez" />
      <meta property="og:title" content="Test Mercado libre by @wizanchez" />
      <meta
        property="og:description"
        content="Test Mercado libre by @wizanchez"
      />
      <meta
        property="og:image"
        content="https://meli-wiz.vercel.app/assets/images/Logo_ML@2x.png"
      />
    ${style}
  </head>

  <body>
    <div id="app">${html}</div>
    <script id="server-data" type="application/json">
      ${JSON.stringify(initialProps)}
    </script>
    <script src="/app.js" type="text/javascript"></script>
  </body>
</html>
`;
};
