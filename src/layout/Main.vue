<template>
  <a-layout class="app-content" id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <div class="logo-c" v-if="!collapsed">
          <IconFont type="iconlogo1" />
        </div>
        <IconFont type="iconLOGOB" style="font-size:28px;" v-else />
      </div>
      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="app-header" style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <AppHeader />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import Sidebar from './Sidebar.vue'
import AppHeader from './Header.vue'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { StateType } from '../@types/index'
import { setStoreState } from '@/store/utils'
import { UIStateType } from '@/store/modules/ui/state'

export default defineComponent({
  components: {
    Sidebar,
    AppHeader,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const state = reactive({
      selectedKeys: ['1']
    })
    const store = useStore<StateType>()
    const collapsed = computed({
      get: () => {
        return store.state.ui.sidebarCollapsed
      },
      set: val => {
        setStoreState<UIStateType>('ui', 'sidebarCollapsed', val)
      }
    })
    return {
      collapsed,
      ...toRefs(state)
    }
  }
})
</script>
<style lang="less" scoped>
.app-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.app-content {
  height: 100%;
  ::v-deep(.ant-menu-item) {
    margin-top: 0;
    // border: 1px solid #fff;
    text-align: left;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: @primary;
}

.logo {
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .logo-c {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  ::v-deep(.anticon) {
    font-size: 100px;
  }
}
</style>
