<template>
  <div>
    <h1 v-if="!name1">加载中......</h1>
    <h1 v-else>
      most star repo <a :href="repoUrl">{{name1}}</a>
    </h1>
  </div>

</template>

<script>
  import axios from'axios'

export default {
  data(){
    return {
      name1:'',
      repoUrl:''
    }
  },
  mounted(){
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // this.$http.get(url).then(result => {
    //   const repo = result.data.items[0]
    //   this.name1 = repo.name
    //   this.repoUrl = repo.html_url
    // }).catch(err => {
    //   alert('请求发送失败')
    //   console.log(err)
    // })

    axios.get(url).then(result => {
      const repo = result.data.items[0]
      this.name1 = repo.name
      this.repoUrl = repo.html_url
    }).catch(err => {
      alert('请求发送失败')
      console.log(err)
    })

  },
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
