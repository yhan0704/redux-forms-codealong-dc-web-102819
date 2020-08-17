export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log("reducer received this action:", action);
  switch(action.type){
    case 'ADD_TODO':
      return {todos:state.todos.concat(action.input.input)}
    default:
      return state
  }
}
