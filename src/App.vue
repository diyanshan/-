<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addtodos="addtodos"/>
        <List :todos="dos" :deletetodos="deletetodos"/>
        <Footer :dos="dos" :cleardos="cleardos" :idselectedALL="idselectedALL"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import './base.css'
import storageUtile from './until/storageUtile.js'

export default {
  data(){
    return {
      // dos:storageUtile.getTodos()
      dos: [
        {title: '吃饭', complete: false},
        {title: '睡觉', complete: false},
        {title: '打豆豆', complete: true},
      ]
    }
  },
  methods:{
    addtodos(dos){
      this.dos.unshift(dos)
    },
    deletetodos(index){
      this.dos.splice(index,1)
    },
    cleardos(){
      this.dos = this.dos.filter(dos => !dos.complete)
    },
    idselectedALL(is){
      this.dos.forEach(dos => dos.complete = is)
    }
  },

  name: 'App',
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
