[![Build Status](https://travis-ci.org/mortenson/twig-components-example.svg?branch=master)](https://travis-ci.org/mortenson/twig-components-example)

# twig-components-example

An example Twig Component library using Webpack.

This project was originally generated using [generator-twig-components-webpack](https://github.com/mortenson/generator-twig-components-webpack).

# Getting started

To run a local webserver that shows how these components can be used, run
`npm install && npm start`.
 
# Including components on your site

To use these components on your site, include `dist/components.bundled.js` on
the page and any of the included component tags. For example:

```html
<html>
  <head>
    <script src="./twig-components-example/components.bundled.js"></script>
  </head>
  <body>
    <tce-hero src="hero.jpg" text="Great intro" subtext="Better follow up" callout-text="Click me" callout-href="/submit" align="middle"></tce-hero>
  </body>
</html>
```

Should render the `tce-hero` tag.

If you prefer to manage polyfills and the Twig.js library yourself, you can
include `components.js`.

# Running the build

To execute the entire production Webpack build, run `npm run build`.

# Running tests

Tests are written with the [web-component-tester](https://github.com/Polymer/web-component-tester)
package.

Before running tests, you'll need to setup your local environment:

1. Ensure Java is available in your `PATH`
1. Run `npm install -g bower rollup web-component-tester`

After all dependencies have been installed, run `npm test`.
