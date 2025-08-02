export interface Todo {
    id: number,
    title: string
}

export interface TodoState {
    todos: Todo[]
}

export const initialState: TodoState = {
    todos: []
}