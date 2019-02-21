<template>
   <ul>
     <li v-for="item in Msg" :key="item.id">
       <router-link :to="`/home/message/detail/${item.id}`">{{item.title}}</router-link>
       <button @click="$router.push(`/home/message/detail/${item.id}`)">push</button>
       <button @click="$router.replace(`/home/message/detail/${item.id}`)">replace</button>
     </li>
     <button @click="$router.back()">back</button>
     <router-view/>
   </ul>
</template>

<script>
  export default {
    data(){
      return{
        Msg:[]
      }
    },
    mounted () {
      setTimeout(() => {
        const message =[
          {id: 1, title:'message001'},
          {id: 2, title:'message002'},
          {id: 3, title:'message003'},
        ]
        this.Msg = message
      },1000)
    },
    name: 'Message'
  }
</script>

<style scoped>

</style>
