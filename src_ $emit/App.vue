<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addtodos="addtodos"/>
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
import storageUtile from './until/storageUtile'
import './base.css'

export default {
  data(){
    return {
      dos: storageUtile.getTodos()
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
  watch:{
    dos:{
      deep:true,
      // handler: function (newvalue) {
      //   storage.saveTodos(newvalue)
      // }
      handler:storageUtile.saveTodos

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
