/*
 * @Author: Andy
 * @Date: 2022-04-29 17:35:49
 * @LastEditTime: 2022-08-09 22:08:54
 */

import { Login, LoginSuccess } from '@/types/login.interface'
import { get, post } from '@/api'


const login = async (params: Login): Promise<LoginSuccess> => post('admin-login/checkLogin', params)
/*
const getUserInfo = async (): Promise<User> => get('user/getUserInfo')
const registerUser = async (params: Login): Promise<SUCCESS> => post('user/addUser', params)
*/
export default { login }