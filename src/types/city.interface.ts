/*
 * @Author: Andy
 * @Date: 2022-08-12 15:33:20
 * @LastEditTime: 2022-08-12 23:07:53
 */
export class City {
  _id?: string

  portal: string[] // 传送门

  cityName: string // 城市名字

  isCity: boolean // 是否是城市

  isCapital: boolean // 是否是首都

  level: number // 等级要求

  dec: string // 描述

  monsters: string[] // 怪物列表

  NPCS: string[] // NPC列表

  Buff: string[] // Buff列表

  prestigeName: string // 声望名称

  prestigeRequire: number // 声望要求

  resurrection: boolean // 是否可复活

  mapUnits: MapUnits[] // 地图单位

  tiledMap: string // 瓦片地图名称

  tags: string[] // 标签

  constructor() {
    this.portal = []
    this.cityName = ''
    this.isCity = false
    this.isCapital = false
    this.level = 0
    this.dec = ''
    this.monsters = []
    this.NPCS = []
    this.Buff = []
    this.prestigeName = ''
    this.prestigeRequire = 0
    this.resurrection = false
    this.mapUnits = []
    this.tiledMap = ''
    this.tags = []
  }
}
export interface MapUnits {
  t: number; // 1.传送门 2.商贩 3.任务 4.技能学习 5.专业学习 6.npc 7.野怪 8.Boss 9.玩家
  x: number; // 列
  y: number; // 行
  Id: string; // 类型ID
  n: string; // 名字
}
export interface SearchOption {
  pageInfo: {
    pageNo: number;
    pageLimit: number;
  };
  searchData: {
    tags?: string;
    isCity?: boolean;
    isCapital?: boolean;
  };
}