// if (!window.localStorage) {
//   module.exports = require("./noop");
// } else {
var driver = localStorage;
module.exports = {
  driver: driver,
  clear: function() {
    driver.clear();
  },
  getItem: function(key, json) {
    try {
      return json ? JSON.parse(driver.getItem(key)) :
        driver.getItem(key);
    } catch (ex) {
      return null;
    }
  }
};
// }