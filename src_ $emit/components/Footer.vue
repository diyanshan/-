<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isseleted"/>
    </label>
    <span>
          <span>已完成{{selected}}</span> / 全部{{dos.length}}
        </span>
    <button class="btn btn-danger" v-show="selected" @click="cleardos">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props:{
      dos:{
        type:Array
      },
      cleardos:{
        type:Function
      },
      idselectedALL:{
        type:Function
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
