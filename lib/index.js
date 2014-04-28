/*
localStorage
IE 8+
Firefox 3.5+
Safari 4+
Chrome 4+
Opera 10.5+
iPhone 2+
Android 2+

sessionStorage
IE 8+
Firefox 2+
Safari 4+
Chrome
Opera 10.5+
iPhone 2+
Android 2+

globalStorage
Firefox 2+
Firefox 2.x
Firefox 3.0.x

Database Storage
Safari 3.1
Safari 3.2

userData
IE 5 - 7

https://github.com/rgrove/storage-lite
http://amplifyjs.com/api/store/

author yao.zhou@dianping.com

*/
var

lang = require('lang'),
JSON = require('json'),
WIN = window,

MODE_NOOP = 0,
MODE_HTML5 = 1,
MODE_GECKO = 2,
MODE_DB = 3,
MODE_USERDATA = 4
;

try {
    if (WIN.localStorage) {
        storageMode = MODE_HTML5;
    } else if (WIN.globalStorage) {
        // Gecko globalStorage methods. Supported by Firefox 2 and 3.0.
        storageMode = MODE_GECKO;
    } else if (WIN.openDatabase && navigator.userAgent.indexOf('Chrome') === -1) {
        // Database storage methods. Supported by Safari 3.1 and 3.2.
        storageMode = MODE_DB;
    } else if (/msie/.test(navigator.userAgent.toLowerCase())) {
        // userData storage methods. Supported by IE5, 6, and 7.
        storageMode = MODE_USERDATA;
    } else {
        storageMode = MODE_NOOP;
    }
} catch (ex) {
    storageMode = MODE_NOOP;
}

if (storageMode === MODE_HTML5 || storageMode === MODE_GECKO) {

    if (storageMode === MODE_HTML5) {

        Storage = require("./localstorage");

    } else if (storageMode === MODE_GECKO) {

        Storage = require("./globalstorage");

    }

} else if (storageMode === MODE_DB || storageMode === MODE_USERDATA) {

    if (storageMode === MODE_DB) {
        Storage = require("./dbstorage");

    } else if (storageMode === MODE_USERDATA) {
        Storage = require("./userdata");
    }
} else {
    Storage = require("./noop");
}


module.exports = Storage;
/*
由于需要兼容浏览器 Safari 3.1 and 3.2 ,采用 openDatabase -> 异步

所以,在读写操作的时候需要依靠 Storage.ready 的回调函数，

或者判断判断组件是否isReady（这种方式不建议）

> Storage.ready(function(){
>    Storage.getItem('xxx');
>    Storage.setItem('xxx','xxx');
>    ....
> });

*/