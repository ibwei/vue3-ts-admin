import { StateType } from '@/@types'
import { Module } from 'vuex'

const state = {
  language: 'zhCN',
  theme: 'light',
  version: '0.0.1',
  fullLoading: false,
  loadingText: 'Loading...',
  currentActiveNav: '解决方案',
  settingBar: {
    opened: false
  },
  sidebar: {
    opened: true,
    withoutAnimation: false
  },
  device: 'desktop',
  colorList: [
    'rgb(245, 34, 45)',
    'rgb(250, 84, 28)',
    'rgb(250, 173, 20)',
    'rgb(66, 185, 131)',
    'rgb(82, 196, 26)',
    'rgb(24, 144, 255)',
    'rgb(47, 84, 235)',
    'rgb(114, 46, 209)'
  ],
  color: 'rgb(24, 144, 255)'
}
type AppStateType = typeof state

const app: Module<AppStateType, StateType> = { namespaced: true, ...state }

export { AppStateType, state }
export default app
