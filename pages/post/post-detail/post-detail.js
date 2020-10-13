var postDatas = require('../../../data/post-data');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    var postData = postDatas.postList[postId];
    this.setData(postData);
  },
})