// pages/playList/playList.js
const MAX_LIMIT = 15;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperImgUrls: [{
            url: 'http://p1.music.126.net/oeH9rlBAj3UNkhOmfog8Hw==/109951164169407335.jpg',
        },
        {
            url: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
        },
        {
            url: 'http://p1.music.126.net/Yo-FjrJTQ9clkDkuUCTtUg==/109951164169441928.jpg',
        }],
        playList: [],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this._getPlaylist();

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: async function () {
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
        this.setData({
            playList: []
        })
        this._getPlaylist();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.playList.length >= 75) {
            return wx.showToast({
                title: '暂无更多歌单',
                icon: 'none',
            })
        }
        this._getPlaylist();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    _getPlaylist() {
        wx.showLoading({
            title: '加载中',
        })
        wx.cloud.callFunction({
            name: 'music',
            data: {
                $url: 'playlist',
                start: this.data.playList.length,
                count: MAX_LIMIT,
            }
        }).then((res) => {
            this.setData({
                playList: res.result.result,
            })
            wx.stopPullDownRefresh();
            wx.hideLoading();
        }, (err) => {
            wx.hideLoading();
            wx.showToast({
                title: '服务器异常，请稍后重试',
                icon: 'none',
            })
        })
    },
    _getMovie() {
        wx.cloud.callFunction({
            name: 'tcbRouter',
            data: {
                $url: 'movie'
            }
        }).then((res) => {
            console.log(res);
        })
    },
    _getMusic() {
        wx.cloud.callFunction({
            name: 'tcbRouter',
            data: {
                $url: 'music',
            }
        }).then((res) => {
            console.log(res);
        })
    }
})