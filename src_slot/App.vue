<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addtodos="addtodos"/>
        <List :todos="dos"/>
        <Footer>
          <label slot="right">
          <input type="checkbox" v-model="isseleted"/>
          </label>
          <span slot="middle">
          <span>已完成{{selected}}</span> / 全部{{dos.length}}
          </span>
          <button slot="left" class="btn btn-danger" v-show="selected" @click="cleardos">清除已完成任务</button>
        </Footer>
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
import PubSub from 'pubsub-js'

export default {
  data(){
    return {
      dos: storageUtile.getTodos()
    }
  },
  mounted(){
    PubSub.subscribe('deletetodos',(msg,index) =>{
      this.deletetodos(index)
    })
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
  computed: {
    //计算的最后结果是number   所以不用调用.length
    selected(){
      return this.dos.reduce ((pre,cur) =>  pre  +  (cur.complete  ?  1 : 0) ,0)
    },
    isseleted:{
      get () {

        return this.dos.length === this.selected && this.dos.length != 0
      },
      set (value) {  //value 就是最新的选中状态
        console.log(value)
        this.idselectedALL(value)
      }
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
