/*
 * @Author: Andy
 * @Date: 2022-05-05 13:30:24
 * @LastEditTime: 2022-09-24 15:37:39
 */
import { PersonOutline, HomeOutline, SunnyOutline, Moon, ExitOutline, SettingsOutline, StarOutline, HandRightOutline, BedOutline, ListSharp } from '@vicons/ionicons5'
import { ChairOutlined, HouseOutlined } from '@vicons/material'
import { FireTwotone } from '@vicons/antd'
import { Map, Monster } from '@vicons/carbon'
import { BookDead } from '@vicons/fa'
import { NIcon } from 'naive-ui'
import { Component, createVNode } from 'vue'
import fuben from '@/utils/svgs/fuben.vue'
import outside from '@/utils/svgs/outside.vue'
import town from '@/utils/svgs/town.vue'
import mainCity from '@/utils/svgs/mainCity.vue'

const renderIcon = (icon: Component) => () => createVNode(NIcon, null, { default: () => createVNode(icon) })
export const ICONS = {
  user: renderIcon(PersonOutline),
  home: renderIcon(HomeOutline),
  light: renderIcon(SunnyOutline),
  dark: renderIcon(Moon),
  logout: renderIcon(ExitOutline),
  setting: renderIcon(SettingsOutline),
  menu: renderIcon(StarOutline),
  role: renderIcon(HandRightOutline),
  sofa: renderIcon(ChairOutlined),
  house: renderIcon(HouseOutlined),
  map: renderIcon(Map),
  bed: renderIcon(BedOutline),
  project: renderIcon(ListSharp),
  hotsale: renderIcon(FireTwotone),
  monster: renderIcon(Monster),
  fuben: renderIcon(fuben),
  outside: renderIcon(outside),
  town: renderIcon(town),
  mainCity: renderIcon(mainCity),
  book: renderIcon(BookDead),
}

export const SVGICONS = {
  fuben,
  outside,
  town,
  mainCity,
}
