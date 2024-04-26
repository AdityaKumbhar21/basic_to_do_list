import {createContext, useContext} from "react";


// defining todo context with an array of objects which include all the todos, that is to be listed.
export const ToDoContext = createContext({
    todos : [
        {
            id: 1,
            todo:"To Do",
            isCompeleted : false
        }
    ],
    addTodo: (todo) =>{},  // adding todo functionality
    updateTodo:(id,todo) =>{}, // updating todo functionality
    removeTodo: (id) =>{}, // deleting a todo
    isTodoCompelete: (id) =>{} // checking for the todo if it is compelete or not
});


export const TodoProvider = ToDoContext.Provider;  // exporting the Provider


// exporting a custom hook to consume context of ToDoContext
export const useTodo = () =>{
    return useContext(ToDoContext);
}





