const app = getApp()
// pages/class/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		class_list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var t = this;
		var db = wx.cloud.database();
		db.collection('class').where({
			_openid: app.globalData.openid
		}).get({
			success: function(res){
				t.setData({class_list:res.data})
			}
		})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

	btclassOnClock:function(event){
		var class_id = event.target.id
		wx.navigateTo({
			url: '/pages/class/detail?class_id=' + class_id,
		})
	}
})