"use strict";
var greeting = function (func) {
    func('hey there');
};
var sayHi = function (s) {
    console.log(s);
};
greeting(sayHi);
///////////////////////////////////////////////////////
var giveResult = function (arr) {
    return arr[1];
};
var s = giveResult([4, 13, 8]);
console.log(s);
