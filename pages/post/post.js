var postData = require('../../data/post-data');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_keys: []
  },

  onPostTap: function(event) {
    //postid是小写
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '/pages/post/post-detail/post-detail?id=' + postId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({post_keys:postData.postList})
  },

  
})