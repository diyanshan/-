<template>
  <div class="todo-footer">
    <!--<label>-->
      <!--<input type="checkbox" v-model="isseleted"/>-->
    <!--</label>-->
    <slot name="right"></slot>
    <!--<span>-->
          <!--<span>已完成{{selected}}</span> / 全部{{dos.length}}-->
        <!--</span>-->
    <slot name="middle"></slot>
    <!--<button class="btn btn-danger" v-show="selected" @click="cleardos">清除已完成任务</button>-->
    <slot name="left"></slot>
  </div>
</template>

<script>
  export default {
    props:{
    },

    name: ''
  }
</script>

<style scoped>
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
