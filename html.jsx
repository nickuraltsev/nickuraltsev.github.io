import React from 'react';
import { config } from 'config';

const buildTime = new Date().getTime();

const cssLink = process.env.NODE_ENV === 'production' ?
  <link rel="stylesheet" href={`/styles.css?t=${buildTime}`} /> :
  null;

const App = (props) =>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{config.siteTitle}</title>
      {cssLink}
    </head>
    <body>
      <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
      <script src={`/bundle.js?t=${buildTime}`}></script>
    </body>
  </html>;

export default App;
