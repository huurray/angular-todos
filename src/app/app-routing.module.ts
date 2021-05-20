import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { TodosComponent } from '@/todos/todos.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: '**', redirectTo: '/todos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
