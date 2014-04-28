if(!/msie/.test(navigator.userAgent.toLowerCase())){
    module.exports = require('./noop');
}else{
    var USERDATA_PATH = 'dp_storage';
    var USERDATA_NAME = 'data';
    var data = {};
    var JSON = require('json');
    var lang = require('lang');
    var adapter = require('./adapter-layer');
    var lang = require('lang');

    module.exports = {
        _init: function(){
            var storage_node = document.createElement('script');
            storage_node.type="text/plain";
            storage_node.addBehavior('#default#userData');
            document.getElementsByTagName("head")[0].appendChild(storage_node);
            storage_node.load(USERDATA_PATH);
            this.driver = storage_node;
            this.data = {};
        },
        _save: function () {
            var _data = JSON.stringify(this.data);
            try {
                this.driver.setAttribute(USERDATA_NAME, _data);
                this.driver.save(USERDATA_PATH);
            } catch (ex) {
                alert(ex);
            }
        }
    };

    lang.mix(module.exports,adapter);
}