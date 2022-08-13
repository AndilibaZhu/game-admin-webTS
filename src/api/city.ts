/*
 * @Author: Andy
 * @Date: 2022-08-12 21:01:53
 * @LastEditTime: 2022-08-12 22:39:56
 */
import { post } from '@/api'
import { PageReturn } from '@/types/default.interface'
import { City, SearchOption } from '@/types/city.interface'

const addCities = async (params: City): Promise<undefined> => post('admin-cities/addCities', params)
const getAllCities = async (params:SearchOption): Promise<PageReturn<City[]>> => post('admin-cities/getAllCities', params)
export default { addCities, getAllCities }
