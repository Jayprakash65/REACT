import { createContext, useContext } from "react";

export const TodoContext = createContext({
        todos: [
            {
                id: 1,
                todo: "todo msg",
                completed: false,

            }
        ],

        addTodo
})


export const TodoProvider = TodoContext.Provider



export default function useTodo(){
    return useContext(TodoContext)
}




