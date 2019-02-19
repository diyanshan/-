<template>
  <li @mouseenter="mouse(true)" @mouseleave="mouse(false)"  :style="{backgroundColor:myColor}">
    <label>
      <input type="checkbox" v-model="dos.complete"/>
      <span>{{dos.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    props:{
      dos:{
        type:Object
      },
      index:{
        type:Number
      }
    },
    data(){
      return{
        myColor:'white',
        isShow: false
      }
    },
    methods:{
      mouse(isEnter){
        if (isEnter){
          this.myColor = '#ccc'
          this.isShow = true
        } else {
          this.myColor = 'white'
          this.isShow = false
        }
      },
      //删除当前dos
      deleteItem(){
        PubSub.publish('deletetodos',this.index)
      }
    },
    name: 'Item',

  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
