import Taro from "@tarojs/taro-h5";
class PageRouter {
  $instance = Taro.getCurrentInstance();
  constructor() {
    Taro.getCurrentInstance().router.params;
  }
  gotoPage(params) {
    if (params && params.url) {
      Taro.navigateTo({ ...params });
    }
  }
  getParams() {
    return this.$instance.router.params;
  }
}
export default new PageRouter();