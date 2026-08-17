import { Component, inject } from '@angular/core';
import { Membro } from '../../components/membro/membro';
import { User } from '../../components/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Membro, User],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly router = inject(Router)
 

  onSubmit() {
    this.router.navigate(['/login']);
  }
}
