<template>
<h1>
    click {{$store.state.count}},count is {{$store.getters.evenOrodd}}
    <br>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">increase if odd</button>
    <button @click="increaseAsync">increase if async</button>
</h1>
</template>

<script>
  // import {
  //   mapState,
  //   mapGetters
  // } from 'vuex'

export default {
  // computed:{
  //   ...mapState['count','evenOrodd']
  // },
  methods:{
    increase(){
      this.$store.dispatch('increase')
    },
    decrease(){
      this.$store.dispatch('decrease')
    },
    increaseOdd(){
      this.$store.dispatch('increaseOdd')
    },
    increaseAsync(){
      this.$store.dispatch('increaseAsync')
    },
  },
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
