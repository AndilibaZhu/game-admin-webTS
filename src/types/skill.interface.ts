/*
 * @Author: Andy
 * @Date: 2022-09-23 15:47:03
 * @LastEditTime: 2022-09-24 20:07:17
 */

export class Skill { 
  _id?: string // 技能ID
  skillName: string // 技能名字
  skillType: number // 技能类型 1.主动单体 2.主动群体 3.主动目标群体 4.主动dot 5.主动buff 6.被动加成 7.恢复单体 8.恢复群体
  skillDec: string // 技能描述
  skillIcon: string // 技能图标
  skillSource:number // 技能来源 1.普通 2.商店 3.学习
  skillLevel: number // 技能等级
  skillCost: number // 技能消耗
  skillDistance: number // 技能距离
  skillCD: number // 技能冷却
  skillLast: number // 技能持续时间
  skillRange: number // 技能范围
  skillTarget: number // 技能目标 1.自己 2.敌人 3.友方
  skillEffect: number // 技能效果 1.伤害 2.治疗 3.增益 4.减益
  skillValue: number // 技能效果百分比
  skillValue2: number // 技能效果固定值

  skillPrice: number // 技能价格
  skillLvReq: number // 技能等级要求
  skillJobReq: number // 技能职业要求 1.战士 2.法师 3.猎人
  constructor() {
    this.skillName = ''
    this.skillType = 0
    this.skillDec = ''
    this.skillIcon = ''
    this.skillDistance = 0
    this.skillLevel = 1
    this.skillCost = 0
    this.skillSource = 1
    this.skillCD = 0
    this.skillLast = 0
    this.skillRange = 0
    this.skillTarget = 0
    this.skillEffect = 0
    this.skillValue = 0
    this.skillValue2 = 0
    this.skillPrice = 0
    this.skillLvReq = 0
    this.skillJobReq = 0
  }
}
export interface SearchOption {
  pageInfo: {
    pageNo: number
    pageLimit: number
  }
  searchData: {
    skillName?: string
  }
}
