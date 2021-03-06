// pages/class/detail.js
const db = wx.cloud.database()

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
		var t = this
		t.setData({class_id:options.class_id})
		db.collection('loginin').where({
			class_id:options.class_id
		}).get({
			success:function(res){
				console.log(res)
				t.setData({ list: res.data })
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
	/** 
	* 跳转二维码页面
	*/
	showQrcode: function (event){
		// console.log(event)
		wx.navigateTo({
			url: '/pages/qrcode/show?codestr=' + event.target.id,
		})
	}
})