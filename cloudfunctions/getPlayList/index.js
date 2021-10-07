// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios');

cloud.init();
const db = cloud.database();
const playlistCollection = db.collection('playlist');
const MAX_LIMIT = 100;
const BASE_URL = 'http://123.207.32.32:9001';
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();
    const result = await axios.get(`${BASE_URL}/playlist/detail?id=${event.playlistId}`);
    // const result = await axios.get('http://123.207.32.32:9001/playlist/detail?id=4946207854');
    console.log(result);
    // const playlist = result.data.result;
    // await playlistCollection.add({
    //     data: [...playlist],
    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // })
}