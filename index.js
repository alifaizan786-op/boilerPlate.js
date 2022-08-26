const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const fs = require("fs");
const path = require("path");

const { createDirectories } = require("./helpers/fsHelpers")

const { 
  boilerHtml,
  boilerResetCss,
  boilerStyleCss,
  boilerScript 
} = require("./helpers/generateBoiler")

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

function loadMainPrompts() {
  prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'What is the name of your app?',
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
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    // Call the appropriate function depending on what the user chose
    switch (choice) {
      case "front_end_app":
        frontEndApp(res.appName);
        break;
      default:
        quit();
    }
  });
}

async function frontEndApp(appName) {
  let dirs = [
    "./output",
    "./output/assets",
    "./output/assets/CSS",
    "./output/assets/JS",
    "./output/assets/Images",
    "./output/assets/Images/small",
    "./output/assets/Images/medium",
    "./output/assets/Images/large",
  ]

  for (let i = 0; i < dirs.length; i++) {
    await createDirectories(dirs[i])
  }

  await boilerHtml("./output", appName)
  await boilerResetCss("./output/assets/CSS/")
  await boilerStyleCss("./output/assets/CSS/")
  await boilerScript("./output/assets/JS/")


}


function quit() {
  console.log("Goodbye!");
  process.exit();
}

init();
