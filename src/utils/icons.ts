/*
 * @Author: Andy
 * @Date: 2022-05-05 13:30:24
 * @LastEditTime: 2022-08-09 16:43:19
 */
import { PersonOutline, HomeOutline, SunnyOutline, Moon, ExitOutline, SettingsOutline, StarOutline, HandRightOutline, BedOutline, ListSharp } from '@vicons/ionicons5'
import { ChairOutlined } from '@vicons/material'
import { FireTwotone } from '@vicons/antd'
import { NIcon } from 'naive-ui'
import { Component, createVNode } from 'vue'


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
  bed: renderIcon(BedOutline),
  project: renderIcon(ListSharp),
  hotsale: renderIcon(FireTwotone),
}

export const SVGICONS = {
}