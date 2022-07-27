<style lang="sass">
.default
  width: 100%
  height: 100%
  border: 1px solid red
  display: grid
  grid-template-rows: 80px 1fr 100px

  &__header
    border: 1px solid blue

  &__content
    border: 1px solid green

  &__footer
    border: 1px solid black
</style>

<template lang="pug">
.default
  .default__header
  .default__content
    router-view
  .default__footer
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutDefault2',
  setup() {
    return {}
  }
})
</script>
