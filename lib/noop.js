var NOOP = function () { };

module.exports = {
    /**
    * @public
    * @method clear
    * @description 全部清除
    */
    clear: NOOP,
    /**
    * @public
    * @method length
    * @description 获存储数量
    * @return {Number}
    */
    length: function () { return 0; },
    /**
    * @public
    * @method getItem
    * @param key {string}
    * @param json {bool}
    * @description 获取值
    * @return {Object}
    */
    getItem: NOOP,
    /**
    * @public
    * @method removeItem
    * @param key {string}
    * @description 移除值
    */
    removeItem: NOOP,
    /**
    * @public
    * @method setItem
    * @param key {string}
    * @param value {object}
    * @description 存储值
    */
    setItem: NOOP
};