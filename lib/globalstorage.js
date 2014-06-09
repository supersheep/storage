// if (!window.globalStorage) {
//     module.exports = require("./noop");
// } else {
var driver = window.globalStorage[window.location.hostname];
module.exports = {
    driver: driver,
    clear: function() {
        for (var key in driver) {
            if (driver.hasOwnProperty(key)) {
                driver.removeItem(key);
                delete driver[key];
            }
        }
    },
    getItem: function(key, json) {
        try {
            return json ? JSON.parse(driver[key].value) :
                driver[key].value;
        } catch (ex) {
            return null;
        }
    }
};
// }