const { prompt } = require("inquirer");
const logo = require("asciiart-logo");

const logoText = logo({ name: "Boiler Plate . JS",
                    lineChars: 10,
                    padding: 2,
                    margin: 3,
                    borderColor: 'blue',
                    logoColor: 'blue',
                    textColor: 'blue', 
                }).emptyLine()
                .right('version 1.0.0')
                .render();

console.log(logoText);