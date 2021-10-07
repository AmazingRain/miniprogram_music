// components/musicList/musicList.js
const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        musiclist: Array
    },

    /**
     * 组件的初始数据
     */
    data: {
        playingId: -1,
    },
    pageLifetimes: {
        show() {
            this.setData({
                playingId: parseInt(app.getPlayMusicId())
            })

        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onClick(e) {
            const dataset = e.currentTarget.dataset;

            this.setData({
                playingId: dataset.musicid
            })
            wx.navigateTo({
                url: `../../pages/player/player?musicId=${dataset.musicid}&index=${dataset.index}`,
            })
        }

    }
})
