/* eslint-disable no-console */

// TODO: Delete this file once all of Gel is in TS
const path = require('path');
const fs = require('fs');

const files = [];

// based on https://stackoverflow.com/a/63111390/8459521
function listFilesInDirectory(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const absolutePath = path.join(directory, file);

    if (fs.statSync(absolutePath).isDirectory()) {
      return listFilesInDirectory(absolutePath);
    } else if (/.*.js$/.test(absolutePath)) {
      return files.push(absolutePath);
    }
  });
}

function logStats() {
  const addToArrayIfMatchesRegex = (fileName, array, regex) => {
    if (fileName.match(regex)) {
      const name = regex.exec(fileName)[1];
      if (!array.includes(name)) array.push(name);
    }
  };

  const logWithLineBreaks = (name, array) => {
    console.log(`\n>>> Remaining ${name}:`);
    array.forEach((file) => console.log(file));
  };

  const componentRegex = /src\/components\/([\w-]*)\//;
  const compositionRegex = /src\/compositions\/([\w-]*)\//;
  const constantRegex = /src\/constants\/([\w-]*)/;
  const customHookRegex = /src\/customHooks\/([\w-]*)\//;
  const utilRegex = /src\/utils\/([\w-]*)\//;

  const components = [];
  const compositions = [];
  const constants = [];
  const customHooks = [];
  const utils = [];

  files.forEach((file) => {
    addToArrayIfMatchesRegex(file, components, componentRegex);
    addToArrayIfMatchesRegex(file, compositions, compositionRegex);
    addToArrayIfMatchesRegex(file, constants, constantRegex);
    addToArrayIfMatchesRegex(file, customHooks, customHookRegex);
    addToArrayIfMatchesRegex(file, utils, utilRegex);
  });

  logWithLineBreaks('components', components);
  logWithLineBreaks('compositions', compositions);
  logWithLineBreaks('constants', constants);
  logWithLineBreaks('customHooks', customHooks);
  logWithLineBreaks('utils', utils);

  console.log(
    `\n>>> Number of JS files remaining:`,
    `\x1b[31m${files.length} \x1b[0m`,
  );
}

listFilesInDirectory('./src');
logStats();
