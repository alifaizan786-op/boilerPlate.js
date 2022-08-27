const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const fs = require("fs");
const path = require("path");

const { createDirectories } = require("./helpers/fsHelpers");

const {
  boilerHtml,
  boilerResetCss,
  boilerStyleCss,
  boilerScript,
} = require("./helpers/generateBoiler");

const {
  askForFrontEndLib,
  frontEndLibOpts,
} = require("./helpers/promptHelper");

const { genFrontEndApp } = require("./helpers/generateFile&Folders");

/**
 * It creates a logo for the application.
 */
function init() {
  const logoText = logo({
    name: "Boiler Plate . JS",
    lineChars: 10,
    padding: 2,
    margin: 3,
    borderColor: "blue",
    logoColor: "blue",
    textColor: "blue",
  })
    .emptyLine()
    .right("version 1.0.0")
    .render();

  console.log(logoText);

  loadMainPrompts();
}

/**
 * The function `loadMainPrompts()` is called when the user runs the command `node index.js` in the
 * terminal. It then asks the user two questions: 1) What is the name of your app? and 2) I am look for
 * boiler plate code for ...?. The user's answers are then stored in the `res` object. The `res` object
 * is then used to call the appropriate function depending on what the user chose
 */
function loadMainPrompts() {
  prompt([
    {
      type: "input",
      name: "appName",
      message: "What is the name of your app?",
    },
    {
      type: "list",
      name: "choice",
      message: "I am look for boiler plate code for ...",
      choices: [
        {
          name: "A Front-End App",
          value: "front_end_app",
        },
        {
          name: "A Front-End App With A Express Server To Serve It",
          value: "front_end_app_express_server",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    /* A switch statement that is checking the value of the `choice` variable. If the value of `choice`
    is `front_end_app`, then the function `frontEndApp()` is called. If the value of `choice` is
    anything else, then the function `quit()` is called. */
    switch (choice) {
      case "front_end_app":
        /* Calling the function `frontEndApp()` and passing in the value of the `appName` property of
        the `res` object. */
        frontEndApp(res.appName, "output");
        break;
      case "front_end_app_express_server":
        expressServer_FrontEndApp(res.appName)
        break;
      default:
        quit();
    }
  });
}

/**
 * We ask the user if they want to add a front end library, if they do, we ask them which one, then we
 * generate the app
 * @param appName - The name of the app you want to create.
 */
async function frontEndApp(appName, pathParam) {
  askForFrontEndLib().then((res) => {
    let addFrontEndLib = res.addFrontEndLib;

    /* Checking if the user wants to add a front end library. If they do, then it asks them which one. */
    if (addFrontEndLib) {
      frontEndLibOpts().then((res) => {
        genFrontEndApp(appName, res, pathParam);
      });
    } else {
      genFrontEndApp(appName);
    }
  });
}

async function expressServer_FrontEndApp(appName){
  await frontEndApp(appName, "output/public");

}

init();

