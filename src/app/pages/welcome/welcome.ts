import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPayload, UserService } from '../../services/user-service';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {

private readonly router = inject(Router)
private readonly authService = inject(UserService)


userData: UserPayload | null = null;



onSubmit() {
  this.router.navigate(['/home']);

}

ngOnInit(): void {
  this.userData = this.authService.getUserFromToken();
}

}
