// @ts-ignore
/* eslint-disable */
import Model from '../common/store/model';

let bizPath = '/common-service/todo';
const composeUrl = (url) => {
  return bizPath + url;
};
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static  removeBatch(params, options) {
    return  new Model().fetch_post('/common-service/brand/removeBatch', params, options);
  }
  static removeById(params, options) {
    return  new Model().fetch_post('/common-service/brand/removeById', params, options);
  }
  static  update(params, options) {
    return  new Model().fetch_post('/common-service/brand/update', params, options);
  }
  static addNew(params, options) {
    return new Model().fetch_post('/common-service/brand/addNew', params, options);
  }
  static  queryAll(options) {
    return new Model().fetch_get('/common-service/brand/queryAll', {})
    .then((data)=>{
      //console.log(data);
      //let items = data.items;
      if(data.items){
        data.items.forEach((element) => {
          element.key = element.id;
          if(!element.top){
            element.top='middle'
          }
        });
      }
     
      return data.items;
    });
  }
  static  queryAllWithGoods(options) {
    return new Model().fetch_get('/common-service/brand/queryAllWithGoods', {})
    .then((data)=>{
      //console.log(data);
      if(data.items){
        data.items.forEach((element) => {
          element.key = element.id;
          if(!element.top){
            element.top='middle'
          }
        });
      }
      return data.items;
    });
  }
}
