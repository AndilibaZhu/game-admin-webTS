/*
 * @Author: Andy
 * @Date: 2022-04-29 17:35:49
 * @LastEditTime: 2022-08-12 22:39:42
 */

import { Login, LoginSuccess, SearchOption, User } from '@/types/login.interface'
import { post } from '@/api'
import { PageReturn } from '@/types/default.interface'

const login = async (params: Login): Promise<LoginSuccess> => post('admin-login/checkLogin', params)

const getAllUsers = async (params: SearchOption): Promise<PageReturn<User[]>> => post('admin-login/getAllUsers', params)
const banUser = async (params: { id: string, isBaned: boolean }): Promise<undefined> => post('admin-login/banUser', params)
const deleteUser = async (params: { id: string, isDeleted: boolean }): Promise<undefined> => post('admin-login/deleteUser', params)
/*
const getUserInfo = async (): Promise<User> => get('user/getUserInfo')
const registerUser = async (params: Login): Promise<SUCCESS> => post('user/addUser', params)
*/
export default { login, getAllUsers, banUser, deleteUser }
