// pages/loginin/form.js
const db = wx.cloud.database()
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
		isloginined:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var t = this
		t.class_id = options.class_id
		db.collection('loginin').where({
			_openid: app.globalData.openid,
			class_id: t.class_id
		}).get({
			success:function(res){
				if(res.data.length == 0){
					//没有记录就允许签到
					t.setData({ isloginined: false})
				}
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
	onSigninin:function(event){
		var t    = this 
		var name = event.detail.value.name
		if(name == '')
			this.setData({message:"请签名！"})
		else{
			db.collection('loginin').add({
				data:{
					name:name,
					time:Date.parse(new Date()),
					class_id:t.class_id
				},
				success:function(){
					wx.navigateTo({
						url: '/pages/index/index?message=success',
					})
				},
			})
		}
	},
	back:function(){
		wx.navigateBack({
			
		})
	},
	
})