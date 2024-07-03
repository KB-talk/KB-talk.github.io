var posts=["2023/05/06/clash赋予brew新生/","2023/07/16/esp32开发platformio环境配置/","2023/09/08/三维建模fusion360-blender/","2023/05/03/Latex安装与配置/","2023/09/04/使用draw-io绘制流程图/","2023/07/18/使用picx搭建免费图床/","2023/09/04/如何解决adobe破解版盗版检测问题/","2023/08/05/微信小程序搭建/","2023/04/17/文献管理一个zetero足够了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };