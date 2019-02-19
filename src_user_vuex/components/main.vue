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
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['firstshow','loding','msg','users'])
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
