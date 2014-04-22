var driver;
if(!window.globalStorage){
    module.exports = require("./noop");
}else{
    driver = window.globalStorage[window.location.hostname];
    module.exports =  {
        clear: function () {
            for (var key in driver) {
                if (driver.hasOwnProperty(key)) {
                    driver.removeItem(key);
                    delete driver[key];
                }
            }
        },
        getItem: function (key, json) {
            try {
                return json ? JSON.parse(driver[key].value) :
                    driver[key].value;
            } catch (ex) {
                return null;
            }
        }
    };
}