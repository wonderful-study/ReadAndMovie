//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  //页面跳转函数
  onTap: function(event) {
    //父级跳到子级页面
    // wx.navigateTo({
    //   url: '/pages/post/post', 
    // })

    //平级页面跳转
    wx.redirectTo({
      url: '/pages/post/post',
    })
  },
  
})
