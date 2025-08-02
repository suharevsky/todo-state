import { createReducer, on } from "@ngrx/store";
import { initialState, Todo } from "./todo-state";
import { addTodo, removeTodo } from "./todo-actions";

let nextID = 1;

export const todoReducer = createReducer(
    initialState, 

    on(addTodo, (state, {title}) => ({
        ...state,
        todos: [...state.todos, {id: ++nextID, title}]
    })),

    on(removeTodo, (state, {id}) => ({
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== id)
    }))
)