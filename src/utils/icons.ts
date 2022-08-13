/*
 * @Author: Andy
 * @Date: 2022-05-05 13:30:24
 * @LastEditTime: 2022-08-12 17:35:06
 */
import { PersonOutline, HomeOutline, SunnyOutline, Moon, ExitOutline, SettingsOutline, StarOutline, HandRightOutline, BedOutline, ListSharp } from '@vicons/ionicons5'
import { ChairOutlined, HouseOutlined } from '@vicons/material'
import { FireTwotone } from '@vicons/antd'
import { Map } from '@vicons/carbon'
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
}

export const SVGICONS = {
  fuben,
  outside,
  town,
  mainCity,
}
