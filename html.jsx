import React from 'react';
import { config } from 'config';

const BUILD_TIME = new Date().getTime();

const App = (props) =>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{config.siteTitle}</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    </head>
    <body>
      <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
      <script src={`/bundle.js?t=${BUILD_TIME}`}></script>
    </body>
  </html>;

export default App;
