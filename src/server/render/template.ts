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
    <link rel="stylesheet" type="text/css" href="public/styles/main.css">
    <title>.: Meli</title>
    ${style}
  </head>

  <body>
    <div id="app">${html}</div>
    <script>window.__INITIAL_PROPS__=${JSON.stringify(initialProps)}</script>
    <script src="/app.js" type="text/javascript"></script>
  </body>
</html>
`;
};
