import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource) //在每一个组件中 方法 $http.get() //post()

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
