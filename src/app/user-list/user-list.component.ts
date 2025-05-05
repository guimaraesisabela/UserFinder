import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  searchTerm: string = '';
  
// lista dos usuários
  users: User[] = [
    { name: 'João Silva', email: 'joao@email.com' },
    { name: 'Maria Souza', email: 'maria@email.com' },
    { name: 'Pedro Oliveira', email: 'pedro@email.com' },
    { name: 'Ana Costa', email: 'ana@email.com' },
    { name: 'Carlos Pereira', email: 'carlos@email.com' }
  ];

  // filtra usuarios com base na palavra digitada
  get filteredUsers(): User[] {
    if (!this.searchTerm.trim()) {
      return this.users;
    }
    
    const term = this.searchTerm.toLowerCase().trim();
    return this.users.filter(user => 
      user.name.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term)
    );
  }

  // atualiza o termo conforme o input
  updateSearchTerm(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}