<template lang="pug">
v-app
  v-navigation-drawer(app)
  v-main(app)
    slot
  v-footer(app)

</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Component

export default defineComponent({
  name: 'LayoutDefault'
})
</script>
