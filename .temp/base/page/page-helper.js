import Taro, { showToast as _showToast } from "@tarojs/taro-h5";
export default class PageHelper {
  static showToast(params) {
    _showToast(params);
  }
}