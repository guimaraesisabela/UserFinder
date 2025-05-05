import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserListComponent], 
  template: `
    <main>
      <app-user-list></app-user-list>
    </main>
  `,
  styles: []
})
export class AppComponent {}