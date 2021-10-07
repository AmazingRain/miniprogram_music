// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  const {
    OPENID
  } = cloud.getWXContext()

  const result = await cloud.openapi.templateMessage.send({
    touser: OPENID,
    page: `/pages/blog-comment/blog-comment?blogId=${event.blogId}`,
    data: {
        thing1: {
        value: '评价完成'
      },
      thing2: {
        value: event.content
      }
    },
    templateId: '1eTRniCt4zJX1Xw3JW8EkS6NREwNWk7fFcKT3qV-kD8',
    formId: event.formId
  })
  return result
}