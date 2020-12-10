<template>
  <div class="app-sidebar">
    <a-menu
      theme="dark"
      mode="inline"
      :openKeys="firstKeys"
      :defaultSelectedKeys="currentKeys"
      :selectedKeys="currentKeys"
      @openChange="onOpenChange"
    >
      <template v-for="navItem of Sidebar">
        <template v-if="!navItem.children">
          <a-menu-item
            :key="navItem.key"
            @click="navToPath(navItem.routePath, navItem.key)"
          >
            <div class="self-main-title">
              <component :is="navItem.icon"></component>
              <span>{{ navItem.title }}</span>
            </div>
          </a-menu-item>
        </template>
        <template v-else>
          <a-sub-menu :key="navItem.key">
            <template #title>
              <div class="self-main-title">
                <component :is="navItem.icon"></component>
                <span>{{ navItem.title }}</span>
              </div>
            </template>
            <a-menu-item
              v-for="subNav of navItem.children"
              :key="subNav.key"
              @click="navToPath(subNav.routePath, subNav.key)"
            >
              <span>{{ subNav.title }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, onMounted } from 'vue'
import Sidebar from '../config/sidebar'
import { UserOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { StateType } from '../@types/index'
import { setStoreState } from '@/store/utils'
import { UIStateType } from '@/store/modules/ui/state'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    UserOutlined
  },
  setup() {
    const store = useStore<StateType>()

    const router = useRouter()

    const state = reactive({
      // 所有的二级子菜单 key
      // rootSubmenuKeys: [] as Array<string>
    })

    const firstKeys = computed(() => store.state.ui.sidebarFirstKeys)
    const currentKeys = computed(() => store.state.ui.sidebarCurrentKey)

    // 刷新页面是匹配活跃菜单
    const getCurrentKey = (list: any, currentPath: string) => {
      if (list.children) {
        getCurrentKey(list.children, currentPath)
      } else {
        for (let i = 0; i < list.length; i++) {
          if (list[i].routePath === currentPath) {
            setStoreState<UIStateType>('ui', 'sidebarCurrentKey', [list[i].key])
            return
          }
        }
      }
    }

    const navToPath = (path: string, key: string) => {
      console.log(key)
      if (!path) return
      setStoreState<UIStateType>('ui', 'sidebarCurrentKey', [key])
      router.push(path)
    }

    const onOpenChange = (openKeys: string[]) => {
      // 可以同时展开多个菜单，可以用此方法
      /* const latestOpenKey = openKeys.find((key) => this.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.openKeys = openKeys
      Store.__s('openKeys', openKeys)
    } else {
      this.openKeys = latestOpenKey ? [latestOpenKey] : []
      Store.__s('openKeys', this.openKeys)
    } */

      // 同时只展开一项
      setStoreState<UIStateType>('ui', 'sidebarFirstKeys', [
        String(openKeys[openKeys.length - 1])
      ])
    }

    // 声明周期函数
    onMounted(() => {
      const path = location.hash.slice(1)
      if (path !== '/' && path !== '') {
        for (let i = 0; i < Sidebar.length; i++) {
          getCurrentKey(Sidebar[i], path)
        }
      }
    })

    return {
      navToPath,
      firstKeys,
      currentKeys,
      onOpenChange,
      Sidebar,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
.app-sidebar {
  .self-main-title {
    // border: 1px solid red;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
