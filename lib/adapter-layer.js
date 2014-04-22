/* adapter for userdata and dbstorage implements */
module.exports = {
    clear: function () {
        data = {};
        this._save();
    },
    getItem: function (key, json) {
        return data.hasOwnProperty(key) ? data[key] : null;
    },
    length: function () {
        var count = 0, key;
        for (key in data) {
            if (data.hasOwnProperty(key)) {
                count += 1;
            }
        }
        return count;
    },
    removeItem: function (key) {
        delete data[key];
        this._save();
    },
    setItem: function (key, value, json) {
        if (value === undefined || value === null) {
            this.removeItem(key);
        } else {
            data[key] = value.toString();
            this._save();
        }
    }
}