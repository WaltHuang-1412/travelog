<template lang="pug">
v-app
  v-navigation-drawer(app v-model="drawer")
    template(v-slot:prepend)
      v-list-item(two-line="" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Jane Smith" subtitle="Logged in")
    v-divider
    v-list(density="compact")
      v-list-item(prepend-icon="mdi-home-city" title="Home" value="home")
      v-list-item(prepend-icon="mdi-account" title="My Account" value="account")
      v-list-item(prepend-icon="mdi-account-group-outline" title="Users" value="users")
    template(v-slot:append)
      .pa-2
        v-btn(block)
          | Logout

  v-app-bar(app,color="teal-darken-4",image="https://picsum.photos/1920/1080?random")
    template(v-slot:image)
      v-img(gradient='to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)')
    template(v-slot:prepend)
      v-app-bar-nav-icon(@click.stop.prevent="switchSidebar")
    v-spacer
    v-btn(icon)
      v-icon mdi-login

  v-main
    v-container(fluid)
      router-view

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// Component

export default defineComponent({
  name: 'LayoutDefault',
  setup() {
    const drawer = ref(false)
    function switchSidebar() {
      drawer.value = !drawer.value
    }
    return {
      drawer,
      switchSidebar
    }
  }
})
</script>
