/* adapter for userdata and dbstorage implements */
module.exports = {
    clear: function () {
        if(!this.driver){this._init();}
        this.data = {};
        this._save();
    },
    getItem: function (key, json) {
        return this.data.hasOwnProperty(key) ? this.data[key] : null;
    },
    length: function () {
        var count = 0, key;
        for (key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                count += 1;
            }
        }
        return count;
    },
    removeItem: function (key) {
        if(!this.driver){this._init();}
        delete this.data[key];
        this._save();
    },
    setItem: function (key, value, json) {
        if(!this.driver){this._init();}
        if (value === undefined || value === null) {
            this.removeItem(key);
        } else {
            this.data[key] = value.toString();
            this._save();
        }
    }
}