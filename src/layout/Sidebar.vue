<template>
  <div class="app-sidebar">
    <a-menu theme="dark" mode="inline">
      <template v-for="navItem of Sidebar">
        <template v-if="!navItem.children">
          <a-menu-item :key="navItem.key">
            <div class="self-main-title">
              <user-outlined />
              <span>{{ navItem.title }}</span>
            </div>
          </a-menu-item>
        </template>
        <template v-else>
          <a-sub-menu :key="navItem.key">
            <template #title>
              <div class="self-main-title">
                <user-outlined />
                <span>{{ navItem.title }}</span>
              </div>
            </template>
            <a-menu-item v-for="subNav of navItem.children" :key="subNav.key">
              <user-outlined />
              <span>{{ subNav.title }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Sidebar from '../config/sidebar'
import { UserOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    UserOutlined
  },
  setup() {
    const selectedKeys = []
    return {
      Sidebar,
      selectedKeys
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
