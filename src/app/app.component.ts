import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoState } from './store/todo-state';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './store/todo-actions';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectAllTodoState, selectTodoCount } from './store/todo.selectors';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task = '';
  todos$: Observable<any>;
  todoCount$: Observable<number>;


  constructor(private store: Store<{todoState: TodoState}>) {
    this.todos$ = store.select(selectAllTodoState);
    this.todoCount$ = store.select(selectTodoCount);
  }

  add() {
    if(this.task.trim()) {
      this.store.dispatch(addTodo( { title: this.task }));
      this.task = '';
    }
  }

  remove(id: number) {
    this.store.dispatch(removeTodo({id}))
  }
}
