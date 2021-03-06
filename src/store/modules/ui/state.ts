import { StateType } from '@/@types'
import { Module } from 'vuex'

/** 所有跟 UI 相关的内容放在此处  */
const state = {
  sidebarCollapsed: false,
  sidebarTheme: 'dark',
  sidebarFirstKeys: ['0'] as Array<string>, // 当前打开的一级菜单 key
  sidebarCurrentKey: ['0-1'] as Array<string> // 当前选中的 key
}
type UIStateType = typeof state

const ui: Module<UIStateType, StateType> = { namespaced: true, ...state }

export { UIStateType, state }
export default ui
