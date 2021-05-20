import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {
  public getInitTodos() {
    return [{ createdAt: Date.now(), text: 'Wash my hands!!' }];
  }
}
