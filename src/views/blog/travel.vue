<template lang="pug">
a-container
  v-row
    v-rol(cols="3")
      v-card(color='#385F73' dark='')
        v-card-title.text-h5
          | Unlimited music now
        v-card-subtitle
          | Listen to your favorite artists and albums whenever and wherever, online and offline.
        v-card-actions
          v-btn(text='')
            | Listen Now


</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {}
})
</script>
