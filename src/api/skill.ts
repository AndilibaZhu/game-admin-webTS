/*
 * @Author: Andy
 * @Date: 2022-09-23 22:50:45
 * @LastEditTime: 2022-09-24 15:30:43
 */
import { post } from '@/api'
import { PageReturn } from '@/types/default.interface'
import { Skill, SearchOption } from '@/types/skill.interface'

const addSkills = async (params: Skill): Promise<undefined> => post('admin-skills/addSkills', params)
const getAllSkills = async (params:SearchOption): Promise<PageReturn<Skill[]>> => post('admin-skills/getAllSkills', params)
const delSkills = async (params: { id: string }): Promise<undefined> => post('admin-skills/delSkills', params)
const updateSkills = async (params: Skill): Promise<undefined> => post('admin-skills/updateSkills', params)
export default { addSkills, getAllSkills, delSkills, updateSkills }