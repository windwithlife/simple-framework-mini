
import { View, Button } from '@tarojs/components'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/search-bar.scss";


import {BlockSelect} from "../../../../src";
import {BasePage} from "../../../../src/base";
//import {BasePage} from "simple-framework-mini/base";
import ServerModel from '../../models/ServerModel';

export default class Index extends BasePage {
  state={
    selectedList:[] 
  }
  
  constructor(props){
    super(props);
    this.pageName ="首页"
  }
  
  componentDidMount() {
    let that = this;
    super.componentDidMount();
             
  }

  componentWillUnmount() { }

  componentDidShow() {
    super.componentDidShow();
   }

  componentDidHide() { }

  gotoPreview=()=>{
      const jsonParams = JSON.stringify(this.state.selectedList);    
      const url = 'pages/preview/index?json=' + jsonParams;
      this.goto({url:url});
  }
  createPage=()=>{
    ServerModel.createPage({blocks:this.state.selectedList}).then((result)=>{console.log(result)});

  }
  
  onSelect =(result)=>{
      console.log('selected data..',result)
      this.setState({selectedList:result});
  }
  render() {
    let that = this;
 
    return (
      <View >        
       <BlockSelect key={'select-button'} onResult={that.onSelect}/>
       <Button key={'preview-button'} type='warn' onClick={that.gotoPreview}>预览</Button>
       <Button key={'create-button'} type='warn' onClick={that.createPage}>创建页面</Button>
      </View>
     
    )
  }
}
