# storage
[![Build Status](http://browserman.dp:9000/api/app/storage/badge)](http://search.cortexjs.org/package/storage)

> Storage api for multi-browsers

### .clear()
清空所有存储数据

### .length()
获取存储数据数量

### .setItem(key,value)
根据key,value存储数据

### .getItem(key)
根据key获取存储的值

- 获取未赋值的key,为undefined
- 存储字符，获取字符
- 存储数字，获取数字的字符
- 存储布尔值，获取布尔值对应小写字符
- 存储对象，获取[object Object]
- 存储函数，获取函数的toString
- 存储数组，获取数组join逗号
- 存储日期，获取日期的toString
- 存储正则，获取正则的toString
- 存储null，等于删除key
- 存储undefined，等于删除key

### .removeItem(key)
根据key删除数据