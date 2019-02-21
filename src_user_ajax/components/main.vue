<template>
  <div>
    <h1 v-if="firstshow">请输入关键字</h1>
    <h1 v-else-if="loding">loding....</h1>
    <h1 v-else-if="msg">请求失败</h1>
    <div v-else class="row" v-for="(user,index) in users" :key="index">
      <div class="card">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data(){
      return{
        firstshow:true,
        loding:false,
        msg:'',
        users:[]
      }
    },
    mounted(){
      //订阅消息
      PubSub.subscribe('search',(msg,  searchName) => {
        // 更新状态
        this.firstshow = false
        this.loding =true
        debugger
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url).then(res => {
          const repo = res.data
          debugger
          const users = repo.items.map(item => ({
            name:item.login,
            url:item.html_url,
            avatar_url:item.avatar_url
          }))
          this.loding = false
          this.users =users

          console.log(searchName)

        }).catch(err => {
          //发送失败
          this.loding = false
          this.msg = true
        })
        //发送成功

      })
    },
    name: 'Main'
  }

</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
