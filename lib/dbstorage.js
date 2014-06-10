// if (!window.openDatabase) {
//     module.exports = require("./noop");
// } else {
var DB_NAME = 'dp_storage',
    DB_DISPLAYNAME = 'dp storage data',
    DB_MAXSIZE = 1048576,
    DB_VERSION = '1.0';

module.exports = {
    _init: function() {
        var driver = window.openDatabase(DB_NAME, DB_VERSION, DB_DISPLAYNAME, DB_MAXSIZE);
        var data = {};
        driver.transaction(function(t) {
            t.executeSql("CREATE TABLE IF NOT EXISTS " + DB_NAME + "(name TEXT PRIMARY KEY, value TEXT NOT NULL)");
            t.executeSql("SELECT value FROM " + DB_NAME + " WHERE name = 'data'", [], function(t, results) {
                if (results.rows.length) {
                    try {
                        data = JSON.parse(results.rows.item(0).value);
                    } catch (ex) {
                        data = {};
                    }
                }
            });
        });
        this.driver = driver;
        this.data = {};
    },
    _save: function() {
        this.driver.transaction(function(t) {
            t.executeSql("REPLACE INTO " + DB_NAME + " (name, value) VALUES ('data', ?)", [JSON.stringify(data)]);
        });
    }
};
// }