if(!window.localStorage){
    module.exports = require("./noop");
}else{
    module.exports = localStorage;
}