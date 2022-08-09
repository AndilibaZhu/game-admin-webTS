/*
 * @Author: Andy
 * @Date: 2022-05-01 12:15:20
 * @LastEditTime: 2022-06-13 19:22:04
 */
// import system from './system'
import { httpService } from '@/utils/axios'

const sendNotification = (title: string, message: string, type: string) => {
  if (window.$message) {
    if (type === 'error') {
      window.$message.error(message, { duration: 1000 })
    } else if (type === 'success') {
      window.$message.success(message, { duration: 1000 })
    } else if (type === 'info') {
      window.$message.info(message, { duration: 1000 })
    } else if (type === 'warning') {
      window.$message.warning(message, { duration: 1000 })
    }
  }
}

const post = async (url: string, params: any): Promise<any> => {
  const res = await httpService.post(url, params)
  if (res.code == 200) {
    res.msg ? sendNotification('成功', res.msg, 'success') : ''
    return res.data
  }
  sendNotification('失败', res.msg, 'error')
  return false
}
const get = async (url: string): Promise<any> => {
  const res = await httpService.get(url)
  if (res.code == 200) {
    res.msg ? sendNotification('成功', res.msg, 'success') : ''
    return res.data
  }
  sendNotification('失败', `出错了！${ res.msg }`, 'error')
  return false
}
export { post, get }
