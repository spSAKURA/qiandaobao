const app = getApp()
const db = wx.cloud.database()

// pages/index/index.js
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
		if(options.message)
			this.setData({ message: options.message})
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
	 * 创建按钮被按下时
	 */
	createClass:function(){
		if (app.globalData.openid){
			//创建课堂记录
			var t = this
			db.collection('class').where({ _openid:app.globalData.openid}).get({
				success:function(res){
					//temp
					if(true){
							//确定同一天没有创建过课堂
						var time = Date.parse(new Date());
						db.collection('class').add({
							data:{
								time:time,
							},
							success:function(res){
								//数据库插入成功后创建二维码
								//appurl?classid=res._id
								// drawQrcode({
								// 	width: 200,
								// 	height: 200,
								// 	canvasId: 'myQrcode',
								// 	text: res._id,
								// })
								wx.navigateTo({
									url: '/pages/qrcode/show?codestr=' + res._id,
								})
							}
						})
					}else{
						t.setData({message:"一天只能创建一次"})
					}
				}
			})
		}
		else
			this.setData({ message: "数据加载中请稍后" })
	},
	/**
	 * 扫码
	 */
	scanCode:function(){
		var t = this
		wx.scanCode({
			onlyFromCamera: true,
			scanType: [],
			success: function(res) {
				//res.result 课堂id
				wx.navigateTo({
					url: '/pages/loginin/form?class_id=' + res.result,
				})
				// var class_id = res.result
				// db.collection('loginin').where({
				// 	_openid: app.globalData.openid,
				// 	class_id: class_id
				// }).get({
				// 	success:function(res){
				// 		if(res.data.length == 0){
				// 			//没有记录就签到
				// 			db.collection('loginin').add({
				// 				data:{
				// 					class_id:class_id,
				// 					time:Date.parse(new Date()),
				// 				},
				// 				success:function(res){
				// 					t.setData({message:"签到成功"})
				// 				}
				// 			})
				// 		}else{
				// 			//有记录就提示
				// 			t.setData({ message: "请不要重复签到" })
				// 		}
				// 	}
				// })
			},
			fail: function(res) {},
			complete: function(res) {},
		})
	},
	/**
	 * 跳转课堂列表
	 */
	toClassList:function(){
		wx.navigateTo({
			url:'/pages/class/list'
		})
	},
	toLoginList:function(){
		wx.navigateTo({
			url: '/pages/loginin/index'
		})
	}
})