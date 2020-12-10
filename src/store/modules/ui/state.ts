import { StateType } from '@/@types'
import { Module } from 'vuex'

/** 所有跟 UI 相关的内容放在此处  */
const state = {
  sidebarCollapsed: false,
  sidebarTheme: 'dark'
}
type UIStateType = typeof state

const ui: Module<UIStateType, StateType> = { namespaced: true, ...state }

export { UIStateType, state }
export default ui
