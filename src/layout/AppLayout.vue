<template>
  <div class="app-layout">
    <router-view v-if="fullScreenMode" />
    <Main v-else />
  </div>
</template>

<script>
import Main from './Main.vue'
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Main
  },
  setup() {
    const fullScreenMode = ref(true)
    const router = useRouter()
    watch(router.currentRoute, () => {
      fullScreenMode.value = Boolean(router.currentRoute.value.meta?.fullScreen)
    })

    return {
      fullScreenMode
    }
  }
})
</script>

<style lang="less" scoped>
.app-layout {
  height: 100vh;
}
.router-view {
  margin: 0;
  padding: 0;
}
</style>
