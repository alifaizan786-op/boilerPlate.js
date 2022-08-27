const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const fs = require("fs");
const path = require("path");

const {
  boilerHtml,
  boilerResetCss,
  boilerStyleCss,
  boilerScript,
} = require("./generateBoiler");

const { createDirectories } = require("./fsHelpers");

module.exports = {
  /**
   * It creates a directory structure and then calls functions from another file to create the
   * boilerplate files
   * @param appName - The name of the app.
   * @param frontEndLibArr - An array of front-end libraries that the user wants to use.
   */
  async genFrontEndApp(appName, frontEndLibArr, pathParam) {
    await createDirectories(pathParam);

    /* Creating an array of directories. */
    let dirs = [
      path.join(pathParam, `/assets`),
      path.join(pathParam, `/assets/CSS`),
      path.join(pathParam, `/assets/JS`),
      path.join(pathParam, `/assets/Images`),
      path.join(pathParam, `/assets/Images/small`),
      path.join(pathParam, `/assets/Images/medium`),
      path.join(pathParam, `/assets/Images/large`),
    ];

    /* Looping through the array of directories and creating them. */
    for (let i = 0; i < dirs.length; i++) {
      await createDirectories(dirs[i]);
    }

    let htmlPath = path.join(pathParam);
    let cssPath = path.join(pathParam, `/assets/CSS`);
    let jsPath = path.join(pathParam, `/assets/JS`);

    /* Calling the functions from the generateBoiler.js file. */
    setTimeout(() => {
      boilerHtml(htmlPath, appName, frontEndLibArr ? frontEndLibArr : "");
      boilerResetCss(cssPath);
      boilerStyleCss(cssPath);
      boilerScript(jsPath);
    }, 500);
    
  },
};
