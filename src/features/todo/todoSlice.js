import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = {
  todos : [{id:"abc" , task: "Coding", isDone: false}]
}
const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    addtodo:(state,action)=>{
    let   newtodo={ id: nanoid() ,task :action.payload, isDone: false

      }
      state.todos.push(newtodo);
     

    },
    deletetodo:(state, action)=>{
      //action.payload=id
   state.todos =  state.todos.filter((todo)=> todo.id != action.payload

     )
    },
    markAsDone:(state,action)=>{
      state.todos.map((todo)=> {
        if(todo.id === action.payload){
          todo.isDone = true;
        }
      })

    }

  }

})
export default todoSlice.reducer;
export const  {addtodo, deletetodo , markAsDone} = todoSlice.actions;