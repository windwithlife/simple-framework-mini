import Taro, { setStorageSync as _setStorageSync, getStorageSync as _getStorageSync, removeStorageSync as _removeStorageSync } from "@tarojs/taro-h5";

export default class ClientStorage {
  static setItem(key, value) {
    _setStorageSync(key, value);
  }
  static getItem(key) {
    return _getStorageSync(key);
  }
  static removeItem(key) {
    _removeStorageSync(key);
  }
  static saveToken(token) {
    //localStorage.setItem('web_token', token);
    _setStorageSync('token', token);
  }
  static clearToken() {
    _removeStorageSync('token');
    //localStorage.removeItem('web_token');
  }
  static getToken() {
    const token = _getStorageSync('token');
    return token; //localStorage.getItem('web_token');
  }
}