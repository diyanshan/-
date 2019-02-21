import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
  count:5
}
const mutations ={
  INCREASE(state){
    state.count++
  },
  DECREASE(state){
    state.count--
  }
}
const actions = {
  increase ({commit}) {
    commit('INCREASE')
  },
  decrease ({commit}) {
    commit('DECREASE')
  },
  increaseOdd ({commit,state}) {
    if (state.count % 2 === 1){
      commit('INCREASE')
    }
  },
  increaseAsync ({commit}) {
    setTimeout(() => {
      commit('DECREASE')
    },1000)
  },
}
const getters = {
  evenOrodd(state){
    return  state.count % 2 === 1 ? '奇数' : '偶数'
  }

}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
