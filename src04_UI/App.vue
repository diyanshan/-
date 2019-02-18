<template>
  <mt-button type="primary" @click.native="detail" style="width: 100%">{{msg}}</mt-button>
</template>

<script>

  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        msg: '狄砚山'
      }
    },
    methods: {
      detail(){
        Toast("请求成功")
        this.msg = 'diyanshan'
      }
    }
  }
</script>

<style scoped>

</style>
