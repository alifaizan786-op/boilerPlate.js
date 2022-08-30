const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * It asks the user if they want to add any front end libraries.
   * @returns a prompt that asks the user if they would like to add any front end libraries.
   */
  askForFrontEndLib() {
    return prompt([
      {
        type: "list",
        name: "addFrontEndLib",
        message: "Would you like to add any front end libraries ?",
        choices: [
          {
            name: "yes",
            value: true,
          },
          {
            name: "no",
            value: false,
          },
        ],
      },
    ]);
  },
  /**
   * It takes the user's input from the prompt, and then filters the frontEndLibArr array to find the
   * objects that match the user's input.
   * @returns An array of objects.
   */
  frontEndLibOpts() {
    return prompt([
      {
        type: "checkbox",
        name: "frontEndLibOpts",
        message: "Which front end libraries would you like to add ?",
        choices: [
          "Bootstrap",
          "Tailwind Css",
          "Bulma",
          "Skeleton CSS",
          "Materialize",
          "Day Js",
          "Moment.js",
          "Jquery",
          "Jquery UI",
        ],
      },
    ]).then((res) => {
      let tempArr = [];
      res.frontEndLibOpts.map((item) => {
        let tempObj = frontEndLibArr.filter((obj) => obj.name === item)[0];
        tempArr.push(tempObj);
      });
      return tempArr;
    });
  },
  expressBackEndOpts() {
    return prompt([
      {
        type: "input",
        name: "portNumber",
        message : "What port number would you like to serve your app on ?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return 'Please enter a positive number greater than zero.';
        }
      }
    ])
  }
};

let frontEndLibArr = [
  {
    name: "Bootstrap",
    value: {
      css: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">`,
      js: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>`,
    },
  },
  {
    name: "Tailwind Css",
    value: {
      css: ``,
      js: `<script src="https://cdn.tailwindcss.com"></script>`,
    },
  },
  {
    name: "Bulma",
    value: {
      css: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">`,
      js: ``,
    },
  },
  {
    name: "Skeleton CSS",
    value: {
      css: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/Z2eVATePGHOkMIn+xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />`,
    },
  },
  {
    name: "Materialize",
    value: {
      css: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`,
      js: `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`,
    },
  },
  {
    name: "Day Js",
    value: {
      css: ``,
      js: `<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>`,
    },
  },
  {
    name: "Moment.js",
    value: {
      css: ``,
      js: `<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" integrity="sha512-CryKbMe7sjSCDPl18jtJI5DR5jtkUWxPXWaLCst6QjH8wxDexfRJic2WRmRXmstr2Y8SxDDWuBO6CQC6IE4KTA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
    },
  },
  {
    name: "Jquery",
    value: {
      css: ``,
      js: `<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>`,
    },
  },
  {
    name: "Jquery UI",
    value: {
      css: ``,
      js: `<script
        src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"
        integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c="
        crossorigin="anonymous"></script>`,
    },
  },
];
