/*
 * @Author: Andy
 * @Date: 2022-08-09 16:45:29
 * @LastEditTime: 2022-08-11 17:54:35
 */
export interface LoginSuccess {
  token: string
}
export interface Login {
  username: string
  password: string
}
export interface SearchOption {
  pageInfo: {
    pageNo: number
    pageLimit: number
  }
  searchData: {
    username?: string
    isDeleted?: string
    isBaned?: boolean
  }
}
export interface User {
  _id: string
  username: string
  password: string
  userDataID: string
  createTime: number
  lastLogin: number
  salt: string
  isBaned: boolean
  isDeleted: boolean
}
