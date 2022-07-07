<template lang="pug">
component(:is="layout")
  router-view
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout)
    return {
      layout
    }
  }
})
</script>
<style lang="scss">
@import '@/assets/styles/transition';
@import '@/assets/styles/_reboot';
@import '@/assets/styles/ant-design';

#app {
  width: 100vw;
  height: 100vh;
}
</style>
