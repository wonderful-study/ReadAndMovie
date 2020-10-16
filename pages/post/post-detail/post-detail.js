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
    //根据id获取数据
    var postId = options.id;
    this.data.curentPostId = postId;
    var postData = postDatas.postList[postId];
    this.setData(postData);
    //添加缓存
    wx.setStorageSync('key','lol');

    //获取collected的值判断是否收藏
    var postCollecteds = wx.getStorageSync('post_Collecteds');
    if(postCollecteds) {
      var postCollected = postCollecteds[postId];
      if(!postCollected) {
        var postCollected = false;
      }
      this.setData({collected:postCollected});
    } else {
      postCollecteds = {};
      postCollecteds[postId] = false;
      wx.setStorageSync('post_Collecteds', postCollecteds);
    }
  },

  onCollectionTap:function(event) {
    //获取文章收藏缓存，进行取反
    var postCollecteds = wx.getStorageSync('post_Collecteds');
    var postCollected = postCollecteds[this.data.curentPostId];
    postCollected = !postCollected;
    postCollecteds[this.data.curentPostId] = postCollected;
    //更新缓存
    wx.setStorageSync('post_Collecteds', postCollecteds);
    //更新数据绑定
    this.setData({collected:postCollected});
    //收藏提示
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      icon: 'success',
      duration: 500
    })
  },

  onShareTap:function(event) {
    wx.showActionSheet({
      itemList: [
        '分享给朋友',
        '分享到朋友圈', 
        '分享到微博'
      ],
      itemColor: "#405f80",
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  }


})