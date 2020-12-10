<template>
  <div class="topmenu-wrap">
    <a-menu class="menu">
      <a-menu-item>
        <a-popover trigger="hover">
          <template v-slot:content>
            <NoticePanel />
          </template>
          <a-badge dot class="badge-area">
            <MessageOutlined style="font-size:20px;" />
          </a-badge>
        </a-popover>
      </a-menu-item>
      <a-menu-item>
        <a-dropdown class="language-area" placement="bottomCenter">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <UserOutlined style="font-size:22px;" />
          </a>
          <template v-slot:overlay>
            <a-menu class="dropdown-panel">
              <a-menu-item>个人中心</a-menu-item>
              <a-menu-item>退出</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-menu-item>
      <a-menu-item style="margin-top:-2px;"
        ><ChangeLanguage textColor="#000" titleColor="#000" titleSize="14px"
      /></a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserOutlined, MessageOutlined } from '@ant-design/icons-vue'
import ChangeLanguage from '@/components/ChangeLanguage.vue'
import NoticePanel from '@/components/NoticePanel.vue'

export default defineComponent({
  components: {
    UserOutlined,
    ChangeLanguage,
    MessageOutlined,
    NoticePanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.topmenu-wrap {
  margin-right: 20px;
  margin-top: 10px;
  ::v-deep(.ant-menu-item-selected) {
    background: transparent !important;
  }
  ::v-deep(.ant-menu-item) {
    background: transparent;
  }
  ::v-deep(.ant-menu:not(.ant-menu-horizontal)) {
    background: transparent;
  }
  ::v-deep(.ant-menu-inline) {
    border-right: 0 !important;
  }
  ::v-deep(.ant-menu-vertical) {
    border-right: 0 !important;
  }
  ::v-deep(.ant-menu-vertical-left) {
    border-right: 0 !important;
  }
}
.badge-area {
  margin-top: 4px;
}
.menu {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-top;
}
</style>
