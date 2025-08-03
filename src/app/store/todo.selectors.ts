import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo-state";

export const selctorTodoState = createFeatureSelector<TodoState>('todoState');

export const selectAllTodoState = createSelector(
    selctorTodoState,
    (state: TodoState) => state.todos
);

export const selectTodoCount = createSelector(
    selctorTodoState, 
    (state: TodoState) => state.todos.length
)