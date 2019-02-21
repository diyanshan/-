<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{m.title}}</li>
    <li>content: {{m.content}}</li>
  </ul>
</template>

<script>
  const allmsg = [
    {id: 1, title: 'message01', content: 'message01 content....'},
    {id: 2, title: 'message02', content: 'message02 content....'},
    {id: 3, title: 'message03', content: 'message03 content....'}
  ]
  export default {
    data() {
      return{
        m:{}
      }
    },
    mounted(){
      const id = this.$route.params.id*1
      const m = allmsg.find(index => index.id ===id)
      this.m = m
    },
    watch:{
      $route(value){
        const id = value.params.id*1
        const m = allmsg.find(index => index.id ===id)
        this.m = m
      }
    },
    name: 'Messagedetail'
  }
</script>

<style scoped>

</style>
