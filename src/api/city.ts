/*
 * @Author: Andy
 * @Date: 2022-08-12 21:01:53
 * @LastEditTime: 2022-08-13 14:57:15
 */
import { post, get } from '@/api'
import { PageReturn } from '@/types/default.interface'
import { City, SearchOption } from '@/types/city.interface'

const addCities = async (params: City): Promise<undefined> => post('admin-cities/addCities', params)
const getAllCities = async (params:SearchOption): Promise<PageReturn<City[]>> => post('admin-cities/getAllCities', params)
const getAllCitiesSimple = async (): Promise<City[]> => get('admin-cities/getAllCitiesSimple')
const getOneCity = async (params: { id: string }): Promise<City> => post('admin-cities/getOneCity', params)
const updateCities = async (params: City): Promise<undefined> => post('admin-cities/updateCities', params)
export default { addCities, getAllCities, getAllCitiesSimple, getOneCity, updateCities }
