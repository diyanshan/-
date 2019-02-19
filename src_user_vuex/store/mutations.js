import {
  REQUESTFIRST,
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from './mutation-type'

export default {
  [REQUESTFIRST](state){
    state.firstshow = false
    state.loding = true
  },
  [REQUEST_SUCCESS](state, users){
    state.loding = false
    state.users =users
  },
  [REQUEST_FAIL](state){
    state.loding = false
    state.msg = true
  }

}
