import { Component, OnInit } from '@angular/core';
// services
import { TodosService } from '@/services/todos/todos.service';
// types
import { Todo } from '@/types';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];
  public newText = '';

  constructor(private todoServices: TodosService) {}

  handleSubmit() {
    this.todos.push({ text: this.newText, createdAt: Date.now() });
    this.newText = '';
  }

  handleDelete(index: number) {
    const copiedTodos = this.todos.slice();
    copiedTodos.splice(index, 1);
    this.todos = copiedTodos;
  }

  ngOnInit(): void {
    this.todos = this.todoServices.getInitTodos();
  }
}
