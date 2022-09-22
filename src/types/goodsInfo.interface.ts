/*
 * @Author: Andy
 * @Date: 2022-07-28 14:35:02
 * @LastEditTime: 2022-09-07 16:54:43
 */
export class BackPack {
  t: number // 1.血瓶2.蓝瓶3.金钱4.钻石5.经验值6.技能书7.装备箱8.物品箱9.礼包10.门票11.BUFF12.打造材料13打造祝福14炉石15.背包100装备

  n: string // 名称

  data: EquipsData | GoodsData // 数据

  l: boolean // 锁定

  _id: string // id（背包内物品编号）

  Id: string // id（物品类型ID）

  num: number // 数量

  constructor(type: number, data: EquipsData | GoodsData, num?: number) {
    if (type === 1) {
      this.t = data.type
      this.n = data.n
      this.data = data
      this.l = false
      this._id = ''
      this.Id = data._id
      this.num = num || 1
    } else {
      this.t = 100
      this.n = data.n
      this.data = data
      this.l = false
      this._id = ''
      this.Id = data._id
      this.num = 1
    }
  }
}

export class GoodsData {
  _id: string // 物品ID

  n: string // 名称

  dec: string // 描述

  type: number // 1.血瓶2.蓝瓶3.金钱4.钻石5.经验值6.技能书7.装备箱8.物品箱9.礼包10.门票11.BUFF12.打造材料13打造祝福14炉石15.背包

  stackMax: number // 堆叠上限

  ico: string // 图标

  color: number // 品级

  level: number // 等级

  usage: string // 用途

  value: number // 售价

  constructor() {
    this._id = ''
    this.n = ''
    this.dec = ''
    this.type = 0
    this.stackMax = 0
    this.ico = ''
    this.color = 0
    this.level = 0
    this.usage = ''
    this.value = 0
  }
}

export class EquipsData {
  _id: string // 物品ID

  n: string

  ico: string

  dec: string

  j: number // 职业要求 1.战士2.弓箭手3。魔法师

  type: number // 部位

  level: number // 装备等级

  color: number // 品质

  handMade: boolean // 专业制造

  value: number // 售价

  str: number // 力量

  dex: number // 敏捷

  int: number // 智力

  vit: number // 防御力

  atk: number // 攻击力

  hp: number // 生命值

  mp: number // 魔法值

  expSpeed: number // 经验加成

  coinSpeed: number // 金钱加成

  atkCrit: number // 攻击暴击

  critDmg: number // 暴击伤害

  penetrate: number // 穿透

  atkSpeed: number // 出手速度

  constructor() {
    this._id = ''
    this.n = ''
    this.ico = ''
    this.dec = ''
    this.j = 0
    this.type = 0
    this.level = 0
    this.color = 0
    this.handMade = false
    this.value = 0
    this.str = 0
    this.dex = 0
    this.int = 0
    this.vit = 0
    this.atk = 0
    this.hp = 0
    this.mp = 0
    this.expSpeed = 0
    this.coinSpeed = 0
    this.atkCrit = 0
    this.critDmg = 0
    this.penetrate = 0
    this.atkSpeed = 0
  }
}
