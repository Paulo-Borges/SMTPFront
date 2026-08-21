import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/userModel';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  private readonly userService = inject(UserService);
  
  users$: Observable<UserModel[]> = this.userService.getUsers();

  ngOnInit(): void {
    this.users$.subscribe({
      next: (dados) => {
        console.log(dados);
      }
    });
  }
}
