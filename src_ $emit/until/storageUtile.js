
export default {
  saveTodos(dos){
    localStorage.setItem('dos_key',JSON.stringify(dos))
  },
  getTodos(){
    return  JSON.parse(localStorage.getItem('dos_key') || '[]')
  }
}
