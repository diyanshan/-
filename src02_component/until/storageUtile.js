
export default{
  saveTodos(todo){
    localStorage.setItem(JSON.stringify(todo))
  },
  getTodos(){
    localStorage.getItem(JSON.parse())
  }
}
