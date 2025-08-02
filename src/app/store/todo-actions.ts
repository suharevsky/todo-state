import { createAction, props } from "@ngrx/store";

export const addTodo = createAction(
    '[Todo] Add',
    props<{title: string}>()
);

export const removeTodo = createAction(
    '[Todo] Remove',
    props<{ id: number }>()
)

