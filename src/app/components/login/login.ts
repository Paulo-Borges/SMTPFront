import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly loginService = inject(LoginService);


  ngOnInit(): void {
   const credentials = { email: 'admin@email.com', password: '123456' };
  
  this.loginService.login(credentials).subscribe({
    next: (token) => {
      console.log('Login efetuado com sucesso:', token);
    },
    error: (err) => {
      console.error('Erro de autenticação:', err);
    }
  });
  }
}
