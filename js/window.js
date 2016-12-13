/**
 * Created by user on 2016/12/12.
 */
// 模块层
// 构造函数与原型函数的混合用法
define(['jquery','jqueryUI'], function ($,ju) {
  function Window() {
    this.cfg = {
      width: 500,
      height: 300,
      content: '',
      handler: null
    };
  }
  
  Window.prototype = {
    alert: function (cfg) {
      var CFG = $.extend(this.cfg,cfg);
      var boundingBox = $('<div class="window_boundingBox"></div>');
      boundingBox.draggable();
      boundingBox.appendTo('body');
      boundingBox.html(CFG.content);
      var btn = $('<input type="button" value="确定">');
      btn.appendTo(boundingBox);
      btn.click(function () {
        CFG.handler && CFG.handler();
        boundingBox.remove();
      });
      boundingBox.css({
        width: CFG.width + 'px',
        height: CFG.height + 'px',
        left: (CFG.x || (window.innerWidth - CFG.width)/2) +'px',
        top: (CFG.y || (window.innerHeight - CFG.height)/2) + 'px',
        backgroundColor: CFG.backgroundColor
      });
    }
  };
  
  //把Window类暴露出来
  return {
    Window: Window
  };
});