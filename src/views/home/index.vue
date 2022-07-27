<style lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  &__content {
    width: 100%;
    height: 100%;
  }
  // .card-list {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 5px;
  // }
}
</style>
<template lang="pug">
.home-page
  .home-page__filter
  .home-page__content
    //- .card-list
    template(v-for="cardItem in cardList")
      v-card(color='#385F73' dark='' cols="3")
        v-card-title.text-h5 {{cardItem.title}}
        v-card-subtitle
          | {{cardItem.subtitle}}
        v-card-actions
          v-btn(text='')
            | Listen Now
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup(props) {
    const cardList: Ref<null | any[]> = ref(null)

    const fakeData = () => {
      cardList.value = [
        {
          title: 'Unlimited music now',
          subtitle:
            'Listen to your favorite artists and albums whenever and wherever, online and offline.'
        },
        {
          title: 'Unlimited music now',
          subtitle:
            'Listen to your favorite artists and albums whenever and wherever, online and offline.'
        },
        {
          title: 'Unlimited music now',
          subtitle:
            'Listen to your favorite artists and albums whenever and wherever, online and offline.'
        }
      ]
    }
    const init = () => {
      fakeData()
    }
    init()

    return {
      cardList
    }
  }
})
</script>
