var posts=["2023/05/03/Latex安装与配置/","2024/11/05/P2LR/","2025/01/16/Smartfusion2开发学习记录-开发环境搭建/","2025/01/18/Smartfusion2开发学习记录-综合测试/","2023/05/06/clash赋予brew新生/","2023/07/16/esp32开发platformio环境配置/","2023/09/04/使用draw-io绘制流程图/","2023/07/18/使用picx搭建免费图床/","2025/02/07/pytorch环境搭建/","2023/09/08/三维建模fusion360-blender/","2024/11/24/双目相机标定/","2023/09/04/如何解决adobe破解版盗版检测问题/","2023/08/05/微信小程序搭建/","2023/04/17/文献管理一个zetero足够了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };