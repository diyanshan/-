import {
  REQUESTFIRST,
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from './mutation-type'

import axios from 'axios'
export default {

  search({commit},searchName){
    //更新状态
      commit(REQUESTFIRST)
    //发送ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url).then(res => {
      //请求成功
      const result = res.data
      const users = result.items.map(item =>({
        name: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
        }))
      commit(REQUEST_SUCCESS, users)
    }).catch(err => {
      //请求失败
      commit(REQUEST_FAIL)
    })


  }
}
