const fs = require("fs");
const path = require("path");

/**
 * It takes in an array of objects, and if the object has a value of css or js, it will add it to the
 * html file.
 * @param filePath - The path to the directory where the file will be created.
 * @param appName - The name of the app
 * @param frontEndLibArr - [{
 * @returns Nothing.
 */
function boilerHtml(filePath, appName, frontEndLibArr) {
  let allCsslinks = "";
  let allJslinks = "";

  if (frontEndLibArr.length > 0) {
    for (let i = 0; i < frontEndLibArr.length; i++) {
      if (frontEndLibArr[i].value.css)
        allCsslinks += `${frontEndLibArr[i].value.css} \n`;
      if (frontEndLibArr[i].value.js)
        allJslinks += `${frontEndLibArr[i].value.js}  \n`;
    }
  }

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${allCsslinks}
    <link rel="stylesheet" href="./assets/CSS/reset.css">
    <link rel="stylesheet" href="./assets/CSS/style.css">
    <title>${appName}</title>
</head>
<body>
    <!-- Write Your Html -->
</body>
${allJslinks}
<script src="./assets/JS/script.js"></script>
</html>
    `;

  fs.writeFileSync(path.join(filePath, "index.html"), html);

  return;
}

/**
 * It writes a CSS file to the specified directory
 * @param filePath - The path to the directory where the file will be created.
 * @returns Nothing.
 */
function boilerResetCss(filePath) {
  let css = `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
     ========================================================================== */
  
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
       ========================================================================== */
  
  /**
     * Remove the margin in all browsers.
     */
  
  body {
    margin: 0;
  }
  
  /**
     * Render the 'main' element consistently in IE.
     */
  
  main {
    display: block;
  }
  
  /**
     * Correct the font size and margin on 'h1' elements within 'section' and
     * 'article' contexts in Chrome, Firefox, and Safari.
     */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Grouping content
       ========================================================================== */
  
  /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd 'em' font sizing in all browsers.
     */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
       ========================================================================== */
  
  /**
     * Remove the gray background on active links in IE 10.
     */
  
  a {
    background-color: transparent;
  }
  
  /**
     * 1. Remove the bottom border in Chrome 57-
     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
     */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
     * 1. Correct the inheritance and scaling of font size in all browsers.
     * 2. Correct the odd 'em' font sizing in all browsers.
     */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
     * Add the correct font size in all browsers.
     */
  
  small {
    font-size: 80%;
  }
  
  /**
     * Prevent 'sub' and 'sup' elements from affecting the line height in
     * all browsers.
     */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
       ========================================================================== */
  
  /**
     * Remove the border on images inside links in IE 10.
     */
  
  img {
    border-style: none;
  }
  
  /* Forms
       ========================================================================== */
  
  /**
     * 1. Change the font styles in all browsers.
     * 2. Remove the margin in Firefox and Safari.
     */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */
  
  button,
  input {
    /* 1 */
    overflow: visible;
  }
  
  /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */
  
  button,
  select {
    /* 1 */
    text-transform: none;
  }
  
  /**
     * Correct the inability to style clickable types in iOS and Safari.
     */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
     * Remove the inner border and padding in Firefox.
     */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
     * Restore the focus styles unset by the previous rule.
     */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
     * Correct the padding in Firefox.
     */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
     * 1. Correct the text wrapping in Edge and IE.
     * 2. Correct the color inheritance from 'fieldset' elements in IE.
     * 3. Remove the padding so developers are not caught out when they zero out
     *    'fieldset' elements in all browsers.
     */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
     * Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
     * Remove the default vertical scrollbar in IE 10+.
     */
  
  textarea {
    overflow: auto;
  }
  
  /**
     * 1. Add the correct box sizing in IE 10.
     * 2. Remove the padding in IE 10.
     */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
     * Correct the cursor style of increment and decrement buttons in Chrome.
     */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
     * Remove the inner padding in Chrome and Safari on macOS.
     */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
     * 1. Correct the inability to style clickable types in iOS and Safari.
     * 2. Change font properties to 'inherit' in Safari.
     */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
       ========================================================================== */
  
  /*
     * Add the correct display in Edge, IE 10+, and Firefox.
     */
  
  details {
    display: block;
  }
  
  /*
     * Add the correct display in all browsers.
     */
  
  summary {
    display: list-item;
  }
  
  /* Misc
       ========================================================================== */
  
  /**
     * Add the correct display in IE 10+.
     */
  
  template {
    display: none;
  }
  
  /**
     * Add the correct display in IE 10.
     */
  
  [hidden] {
    display: none;
  }
  `;

  fs.writeFileSync(path.join(filePath, "reset.css"), css);

  return;
}

/**
 * It creates a new file called style.css in the directory that the user specified and writes a
 * boilerplate comment to it
 * @param filePath - The path to the directory where the files will be created.
 * @returns Nothing.
 */
function boilerStyleCss(filePath) {
  let css = `/* Add Your Styling Below */`;

  fs.writeFileSync(path.join(filePath, "style.css"), css);

  return;
}

/**
 * It creates a script.js file in the directory of the user's choice and writes a comment to it
 * @param filePath - The path to the directory where the boilerplate files will be created.
 * @returns Nothing.
 */
function boilerScript(filePath) {
  let js = `/* Add Your Javascript Below */`;

  fs.writeFileSync(path.join(filePath, "script.js"), js);

  return;
}

function boilerHtmlRoute(filePath){

  let htmlRoute = `const path = require('path');
  const router = require('express').Router();
  
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  module.exports = router;`

  fs.writeFileSync(path.join(filePath, "htmlRoute.js"), htmlRoute);

  return;

}

function boilerApiRoute(filePath){

  let apiRoute = `const router = require('express').Router();

  router.get('/', (req, res) => {
   res.send("Hello World !")
  });
  
  module.exports = router;`

  fs.writeFileSync(path.join(filePath, "apiRoute.js"), apiRoute);

  return;

}

function boilerIndexRoute(filePath, incFrontEndRoute){

  let routeIndex = `const router = require('express').Router();
  const apiRoutes = require('./apiRoutes');
  const htmlRoutes = require('./htmlRoutes');
  
  router.use('/api', apiRoutes);
  router.use('/', htmlRoutes);
  
  module.exports = router;`

  fs.writeFileSync(path.join(filePath, "index.js"), routeIndex);

  return;
  
}

function boilerServerPath(filePath, portNum){
  let server = `
  const express = require('express');
  
  // Initialize the app and create a port
  const app = express();
  const PORT = process.env.PORT || ${parseInt(portNum)};
  
  // Set up body parsing, static, and route middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(require('./routes'););
  
  // Start the server on the port
  app.listen(PORT, () => console.log("Listening on PORT: ${parseInt(portNum)}"));`

  fs.writeFileSync(path.join(filePath, "server.js"), server);

  return;
  
}

function boilerPackageJson(filePath, appName){
  let package = `{
      "name": "${appName.split(" ").join("-")}",
      "version": "1.0.0",
      "description": "",
      "main": "server.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start":"node server.js",
        "watch":"nodemon server.js"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.16.4",
        "nodemon": "^2.0.19"
      }
    }`

  fs.writeFileSync(path.join(filePath, "package.json"), package);

  return;
  
}

/* Exporting the functions so that they can be used in other files. */
module.exports = {
  boilerHtml,
  boilerResetCss,
  boilerStyleCss,
  boilerScript,
  boilerHtmlRoute,
  boilerApiRoute,
  boilerIndexRoute,
  boilerServerPath,
  boilerPackageJson
};


// ./output/routes/apiRoutes.js

// const router = require('express').Router();

// router.get('/notes', (req, res) => {
// res.send("Hello World !")
// });

// module.exports = router;
// ----------------------------------------------
// ./output/routes/htmlRoutes.js

// const path = require('path');
// const router = require('express').Router();

// router.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/notes.html'));
// });

// module.exports = router;
// --------------------------------------------------
// ./output/routes/index.js

// const router = require('express').Router();
// const apiRoutes = require('./apiRoutes');
// const htmlRoutes = require('./htmlRoutes');

// router.use('/api', apiRoutes);
// router.use('/', htmlRoutes);

// module.exports = router;
// ------------------------------------------------
// ./output/server.js


// const express = require('express');

// // Initialize the app and create a port
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Set up body parsing, static, and route middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use(require('./routes'););

// // Start the server on the port
// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
// ------------------------------------------------------------------
// ./output/package.json

// {
//   "name": "note-taker",
//   "version": "1.0.0",
//   "description": "",
//   "main": "server.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "express": "^4.16.4",
//     "uuid": "^3.4.0"
//   }
// }