import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);



  email = '';
  password ='';
  loading = false;
  showPassword = false;


  ngOnInit(): void {

    //   CÓDIGO SE FOR TESTAR MOCKADO  -------------------X----------------------X----------
  //  const credentials = { email: 'admin@email.com', password: '123456' };
  
  // this.loginService.login(credentials).subscribe({
  //   next: (token) => {
  //     console.log('Login efetuado com sucesso:', token);
  //   },
  //   error: (err) => {
  //     console.error('Erro de autenticação:', err);
  //   }
  // });
  }


  isValid(): boolean {
    return this.email.includes('@') && this.password.length >= 3;
  }


  onSubmit(): void {
    if (!this.isValid() || this.loading) return;
  
    this.loading = true;
  
    const credentials = {
      email: this.email,
      password: this.password
    };
  
    this.loginService.login(credentials).subscribe({
      next: (response) => {
        this.loading = false;
        // Exemplo: redireciona para a página principal após o login
        console.log(response)
        // this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao realizar login:', err);
        // Aqui você pode exibir uma mensagem de erro na tela para o usuário
      }
    });
  }
 

}

