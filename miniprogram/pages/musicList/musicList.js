// pages/musicList/musicList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        musicList: [],
        listInfo: {},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading();
        wx.cloud.callFunction({
            name: 'music',
            data: {
                $url: 'musicList',
                playlistId: options.playlistId,
            }
        }).then((res) => {
            wx.hideLoading();
            const result = res.result.playlist;
            this.setData({
                musicList: result.tracks,
                listInfo: {
                    coverImgUrl: result.coverImgUrl,
                    name: result.name,
                }
            })
            wx.setStorageSync('musiclist', result.tracks);
        }, (err) => {
            wx.hideLoading();
            wx.showToast({
                title: '服务器异常，请稍后重试',
                icon: 'none',
            })
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

    }
})