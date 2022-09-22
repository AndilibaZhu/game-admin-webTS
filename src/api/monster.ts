/*
 * @Author: Andy
 * @Date: 2022-09-07 16:32:16
 * @LastEditTime: 2022-09-07 17:10:31
 */
import { post } from '@/api'
import { PageReturn } from '@/types/default.interface'
import { Monster, SearchOption } from '@/types/monster.interface'

const addMonsters = async (params: Monster): Promise<undefined> => post('admin-monsters/addMonsters', params)
const getAllMonsters = async (params:SearchOption): Promise<PageReturn<Monster[]>> => post('admin-monsters/getAllMonsters', params)
const delMonsters = async (params: { id: string }): Promise<undefined> => post('admin-monsters/delMonsters', params)
const updateMonsters = async (params: Monster): Promise<undefined> => post('admin-monsters/updateMonsters', params)
export default { addMonsters, getAllMonsters, delMonsters, updateMonsters }
