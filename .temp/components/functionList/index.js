import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";

var _this = this;

import React from "react";
import { View, Text, Image } from '@tarojs/components';
import "taro-ui/dist/style/components/icon.scss";
import Router from '../../base/route/router';
import "./entrypoint.less";

class Page extends Taro.Component {
  render() {
    const props = this.props;

    let list = props.data;
    const gotoPage = function (brandId) {
      Router.gotoPage({ url: '/pages/goods/list?brandId=' + brandId });
    };
    return <View className="handle_list">
      <View className="list_title">品牌厂商测试</View>
      
      {list.map(item => <View key={item.id} className="handle_list__item" onClick={gotoPage.bind(this, item.id)}>
          <View className="handle_list__item__icon-wrap">

            <Image src={item.logo} className="handle_list_item__icon" />
          </View>

          <Text className="handle_list__item__text">{item.title}</Text>
        </View>)}
    </View>;
  }

}

export default Page;