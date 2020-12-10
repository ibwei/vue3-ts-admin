<template>
  <div style="width:300px;">
    <a-tabs default-active-key="1" style="width: 310px;">
      <a-tab-pane key="1" tab="通知(3)">
        <div class="item">
          <a-empty description="没有通知" />
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="消息(4)">
        <div class="item">
          <a-empty description="没有消息" />
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="代办(5)">
        <div class="item">
          <a-empty description="没有代办" />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="less" scoped>
.item {
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 300px;
}
</style>
