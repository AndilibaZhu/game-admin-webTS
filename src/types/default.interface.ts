/*
 * @Author: Andy
 * @Date: 2022-08-11 16:56:38
 * @LastEditTime: 2022-08-11 17:05:03
 */
export interface RequestReturn<T> {
  code: number
  msg?: string
  data?: T
}
export interface ID {
  id: string
}
export interface PageReturn<T> {
  pageNo: number
  pageSize: number
  total: number
  records: T
}
