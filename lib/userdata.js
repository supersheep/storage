if(!/msie/.test(navigator.userAgent)){
    module.exports = require('./noop');
}else{
    var USERDATA_PATH = 'dp_storage';
    var USERDATA_NAME = 'data';
    var data = {};
    var JSON = require('json');
    var lang = require('lang');
    var adapter = require('./adapter-layer');
    var lang = require('lang');
    var storage_node = document.createElement('script');

    script.type="text/plain";
    storage_node.addBehavior('#default#userData');
    document.head.appendChild(storage_node);
    storage_node.load(USERDATA_PATH);

    module.exports = {
        _save: function () {
            var _data = JSON.stringify(data);
            try {
                storageDriver.setAttribute(USERDATA_NAME, _data);
                storageDriver.save(USERDATA_PATH);
            } catch (ex) { }
        }
    };

    lang.mix(module.exports,adapter);
}