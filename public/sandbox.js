"use strict";
var greet;
// greet = "mamad";
greet = function () {
    console.log("hello world");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(43, 10, 856);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var sayHello = function (user) {
    console.log(user.name + " says hello");
};
var sayHelloAgian = function (user) {
    console.log(user.name + " says hello again");
};
