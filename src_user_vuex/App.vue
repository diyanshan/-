<template>
  <div class="container">
    <Search/>
    <Main/>
  </div>

</template>

<script>
  import Search from './components/search.vue'
  import Main from './components/main.vue'

export default {
  name: 'App',
  components: {
    Search,
    Main
  }
}
</script>

<style>

</style>
