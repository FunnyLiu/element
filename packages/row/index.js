import Row from './src/row';

/* istanbul ignore next */
// 函数式组件
Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};

export default Row;

