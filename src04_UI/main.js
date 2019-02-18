import Vue from 'vue'
import App from './App.vue'
import {Button,Toast} from 'mint-ui'

Vue.component(Button.name,Button)
Vue.component(Toast.name,Toast)


new Vue({
  el: '#app',
  components: {
    App,
  },
  template: '<App/>'
})
