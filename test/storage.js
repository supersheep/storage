var storage = require('../lib/index');
var assert = require('assert');

describe('storage', function() {
    it('Basic Storage API', function() {
        assert.equal(typeof storage.clear, 'function', "Storage.clear 函数类型");
        assert.equal(typeof storage.length, 'function', "Storage.length 函数类型");
        assert.equal(typeof storage.getItem, 'function', "Storage.getItem 函数类型");
        assert.equal(typeof storage.removeItem, 'function', "Storage.removeItem 函数类型");
        assert.equal(typeof storage.setItem, 'function', "Storage.setItem 函数类型");
    });

    it('API - setItem', function() {

        storage.setItem('key1', 'data');
        storage.setItem('key1', 'data2');

        assert.equal(storage.getItem('key1'), 'data2', "相同key设置不同值，以最后一次为准");
    });

    it('API - getItem', function() {

        storage.setItem('key1', 'data');
        storage.setItem('key2', 1);
        storage.setItem('key3', true);
        storage.setItem('key4', {});

        var _data5 = function() {};
        storage.setItem('key5', _data5);

        var _data6 = [1, 2, 3, 4];
        storage.setItem('key6', _data6);

        var _data7 = new Date();
        storage.setItem('key7', new Date());

        var _data8 = new RegExp();
        storage.setItem('key8', _data8);

        storage.setItem('key9', null);
        storage.setItem('key10', undefined);

        assert.equal(storage.getItem('key0'), undefined, "获取未赋值的key,为undefined");
        assert.equal(storage.getItem('key1'), 'data', "存储字符，获取字符");
        assert.equal(storage.getItem('key2'), '1', "存储数字，获取数字的字符");
        assert.equal(storage.getItem('key3'), 'true', "存储布尔值，获取布尔值对应小写字符");
        assert.equal(storage.getItem('key4'), "[object Object]", "存储对象，获取[object Object]");
        assert.equal(storage.getItem('key5'), _data5.toString(), "存储函数，获取函数的toString");
        assert.equal(storage.getItem('key6'), _data6.join(','), "存储数组，获取数组join逗号");
        assert.equal(storage.getItem('key7'), _data7.toString(), "存储日期，获取日期的toString");
        assert.equal(storage.getItem('key8'), _data8.toString(), "存储正则，获取正则的toString");
        assert.equal(storage.getItem('key9'), null, "存储null，等于删除key");
        assert.equal(storage.getItem('key10'), null, "存储undefined，等于删除key");

        assert.equal(storage.length(), 8, "添加10个存储，删除了两个,获取存储长度为8");
    });

    it('API - removeItem', function() {

        storage.setItem('key9', 'data9');
        storage.removeItem('key9');

        assert.equal(storage.getItem('key9'), undefined, "删除存储，获取空");
    });

    it('API - clear', function() {

        storage.clear();

        assert.equal(storage.getItem('key1'), undefined, "存储1为空");
        assert.equal(storage.getItem('key2'), undefined, "存储2为空");
        assert.equal(storage.getItem('key3'), undefined, "存储3为空");
        assert.equal(storage.getItem('key4'), undefined, "存储4为空");
        assert.equal(storage.getItem('key5'), undefined, "存储5为空");
        assert.equal(storage.getItem('key6'), undefined, "存储6为空");
        assert.equal(storage.getItem('key7'), undefined, "存储7为空");
        assert.equal(storage.getItem('key8'), undefined, "存储8为空");

        assert.equal(storage.length(), 0, "clear存储，存储长度为0");
    });

    it('API - length', function() {


        storage.clear();

        [1, 2, 3, 4, 5, 6, 7].forEach(function(i) {
            storage.setItem(i, i);
        });

        assert.equal(storage.length(), 7, "存入7个数据，长度为7");

        storage.clear();

        assert.equal(storage.length(), 0, "clear存储，存储长度为0");
    });
})