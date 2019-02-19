<template>
  <div class="container">
    <Search/>
    <Main/>
  </div>

</template>

<script>
  import Search from './components/search.vue'
  import Main from './components/main.vue'
  import axios from'axios'

export default {
  data(){
    return {

    }
  },
  mounted(){
    // const url = 'https://api.github.com/search/users?q=aa'
    // this.$http.get(url).then(result => {
    //   const repo = result.data.items[0]
    //   this.name1 = repo.name
    //   this.repoUrl = repo.html_url
    // }).catch(err => {
    //   alert('请求发送失败')
    //   console.log(err)
    // })

    // axios.get(url).then(result => {
    //   const repo = result.data.items[0]
    //   this.name1 = repo.name
    //   this.repoUrl = repo.html_url
    // }).catch(err => {
    //   alert('请求发送失败')
    //   console.log(err)
    // })

  },
  name: 'App',
  components: {
    Search,
    Main
  }
}
</script>

<style>

</style>
