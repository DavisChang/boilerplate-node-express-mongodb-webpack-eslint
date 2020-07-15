/* eslint no-console: ["warn", { allow: ["log"] }] */

const Logger = {
  info: (logText) => {
    console.log(`${new Date()}info - ${logText}`);
  },
  debug: (logText) => {
    console.log(`${new Date()}debug - ${logText}`);
  },
  error: (logText) => {
    console.log(`${new Date()}error - ${logText}`);
  },
};

export default Logger;
