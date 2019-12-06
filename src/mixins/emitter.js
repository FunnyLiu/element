function broadcast(componentName, eventName, params) {
  //去所有子组件中递归
  //找到指定名称的组件，抛事件
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      //找到了则通过$emit
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      //找不到则递归调用，继续找下一层
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      // 根据传入的组件名，递归找到指定的祖宗组件
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      // 触发指定事件，通过$emit。
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
