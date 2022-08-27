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
  async genFrontEndApp(appName, frontEndLibArr) {
    /* Creating an array of directories. */
    let dirs = [
      "./output",
      "./output/assets",
      "./output/assets/CSS",
      "./output/assets/JS",
      "./output/assets/Images",
      "./output/assets/Images/small",
      "./output/assets/Images/medium",
      "./output/assets/Images/large",
    ];

    /* Looping through the array of directories and creating them. */
    for (let i = 0; i < dirs.length; i++) {
      await createDirectories(dirs[i]);
    }

    /* Calling the functions from the generateBoiler.js file. */
    await boilerHtml("./output", appName, frontEndLibArr ? frontEndLibArr : "");
    await boilerResetCss("./output/assets/CSS/");
    await boilerStyleCss("./output/assets/CSS/");
    await boilerScript("./output/assets/JS/");
  },
};
