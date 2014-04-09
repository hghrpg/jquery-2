/*
* 源码笔记
* */


//1、slice方法和splice方法的区别

/*slice(startIndex,endIndex)：
*   a、截取并返回数组中的一段：包括startIndex，不包括endIndex
*   b、不改变原数组
*   c、如果不传参数，将会返回原数组：这个在jquery源代码里面的$dom.get(num)方法用于把jquery类数组对象转换成真正的dom数组*/

var originArr = [0,1,2,3];
var sliceRe = originArr.slice(0,2);
console.log(sliceRe);//[0, 1]
console.log(originArr);//[0, 1, 2, 3]
console.log(originArr.slice());//[0, 1, 2, 3]

/*splice(startIndex,length):
*   a、从startIndex位置开始截取字符串，长度为length；
*   b、会改变原数组
*   c、如果不传参数，则返回一个空数组
* */

var originArr = [0,1,2,3];
var spliceRe = originArr.splice(0,2);
console.log(spliceRe);//[0, 1]
console.log(originArr);//[2,3]
console.log(originArr.splice());//[]