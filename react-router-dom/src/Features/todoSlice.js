import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const doo={
                id:nanoid(),
                text:action.payload
            }
           state.todos.push(doo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((element)=>(element.id 
                !== action.payload ))
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer