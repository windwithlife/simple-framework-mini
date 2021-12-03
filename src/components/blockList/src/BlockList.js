import Block5 from '../../block5';
import FunctionList from '../../functionList/src';

const DataSource = {
  
    title: {
      main: "选择",
      subTitle: "在这里用一段话介绍服务的案例情况",
    },
    itemsData: [
      {
        name: 'Block5',
        checked: false,
        sourcecodePath: 'block5',
        component: Block5,
      },
      {
        name: 'FunctionList',
        checked: false,
        sourcecodePath: 'functionList',
        component: FunctionList,
      },
      
    ],
   
};
export default DataSource;
