import { GoodsData } from './goodsInfo.interface'

/*
 * @Author: Andy
 * @Date: 2022-09-07 16:49:12
 * @LastEditTime: 2022-09-24 15:49:22
 */
export class Monster {
  _id?: string // 怪物ID

  monsterName: string

  monsterType: number // 1.近战 2.远程 3.BOSS

  level: number // 等级

  drop: Drop[] // 掉落

  coin: number // 掉落金钱

  exp: number // 掉落经验

  vit: number // 防御力

  atk: number // 攻击力

  hp: number // 生命值

  freeTalk: string[] // 自由对话

  icon: string // 图标

  atkDistance: number // 攻击距离

  dec: string // 描述

  prestige: number // 声望值

  prestigeName: string // 声望名称

  constructor() {
    this.monsterName = ''
    this.monsterType = 1
    this.level = 1
    this.drop = []
    this.coin = 0
    this.exp = 0
    this.vit = 0
    this.atk = 0
    this.hp = 0
    this.freeTalk = []
    this.icon = ''
    this.atkDistance = 0
    this.dec = ''
    this.prestige = 0
    this.prestigeName = ''
  }
}
interface Drop {
  goods: GoodsData[];
  rate: number;
}
export interface SearchOption {
  pageInfo: {
    pageNo: number;
    pageLimit: number;
  };
  searchData?: {
    monsterName: string;
  };
}