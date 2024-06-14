import {createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {id: 1, text: 'hello world'}
    ]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {        // is reducer  ke andar propert and function ata hai 

        addTodo: (state, action) => {       // jab bhi addtodo reducer karoge tho hamesa do chijo ka acess mileyga ek  state   and dusra   action   and stare ke andar hame milta hai current state of  jo bhi state hai , and action ke andar jo bhi data pass ho raha hai 
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }

    }        
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer