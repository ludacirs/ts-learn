var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _username;
class User {
    constructor(username) {
        _username.set(this, void 0);
        this.address = 'korea';
        __classPrivateFieldSet(this, _username, username);
    }
    introduce() {
        console.log(`Hello, my name is ${__classPrivateFieldGet(this, _username)}! and i'm living in ${this.address}`);
    }
}
_username = new WeakMap();
let user = new User("Jeremy Bearimy");
console.log(user);
