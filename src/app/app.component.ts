import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <h1>Todo.</h1>
      </nb-layout-header>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todos';
}
