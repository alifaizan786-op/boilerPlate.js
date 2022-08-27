const path = require("path");
const fs = require("fs");

module.exports = {
  /* Creating a directory. */
  createDirectories(pathname) {
    const __dirname = path.resolve();
    pathname = pathname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, ""); // Remove leading directory markers, and remove ending /file-name.extension
    fs.mkdir(path.resolve(__dirname, pathname), { recursive: true }, (e) => {
      if (e) {
        console.error(e);
      }
    });
  },
};
