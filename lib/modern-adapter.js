module.exports = function(driver) {
  return {
    length: function() {
      return driver.length;
    },
    removeItem: function(key) {
      driver.removeItem(key);
    },
    setItem: function(key, value, json) {
      if (value === undefined || value === null) {
        this.removeItem(key);
      } else {
        driver.setItem(key, json ? JSON.stringify(value) : value);
      };
    }
  }
}