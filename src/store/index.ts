import { createStore, createLogger, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import modules from './modules'
import { StateType } from '@/@types'
import { InjectionKey } from 'vue'

export const key: InjectionKey<Store<StateType>> = Symbol()

const store: Store<StateType> = createStore({
  strict: true,
  mutations,
  actions: {},
  modules: { ...modules },
  plugins:
    process.env.NODE_ENV !== 'production'
      ? [
          createLogger(),
          createPersistedState({
            paths: ['app', 'ui', 'user']
          })
        ]
      : [
          createPersistedState({
            paths: ['app', 'ui', 'user']
          })
        ]
})

export default store
