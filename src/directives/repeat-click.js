import { once, on } from 'element-ui/src/utils/dom';

export default {
  // 相当于防抖
  bind(el, binding, vnode) {
    let interval = null;
    let startTime;
    //取到真正的处理函数
    const handler = () => vnode.context[binding.expression].apply();
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, 'mousedown', (e) => {
      if (e.button !== 0) return;
      startTime = Date.now();
      once(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};
