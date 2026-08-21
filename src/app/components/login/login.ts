import { Component, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '../../services/login-service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmailService } from '../../services/email-service';
import { EmailRequest } from '../../models/emailModel';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);


  constructor(private fb: FormBuilder, private emailService: EmailService) {}


  formulario!: FormGroup;
  // enviando = false;
  enviando = signal(false);
  mensagemSucesso = signal('');
  mensagemErro = signal("");




  email = '';
  password ='';
  loading = false;
  showPassword = false;


  ngOnInit(): void {

    this.inicializarFormulario();
    this.verificarSaude();

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


  private inicializarFormulario():void {
    this.formulario = this.fb.group({
      destinatarios: ['', [Validators.required, Validators.minLength(5)]],
      assunto: ['', [Validators.required, Validators.minLength(5)]],
      corpo: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  private verificarSaude():void {
    this.emailService.health().subscribe({
      next: (response) => {
        console.log('✅ Serviço de email está funcionando', response);
      },
      error: (error) => {
        console.error('❌ Erro ao conectar com serviço de email', error);
        this.mensagemErro.set('Serviço de email indisponível. Tente novamente mais tarde.');
      }
    });
  }

  onEmail():void {
    if (this.formulario.invalid) {
           alert('Por favor, preencha todos os campos corretamente.');
           return;
         }
      
        //  this.enviando = true;
         this.enviando.set(true);
         this.mensagemSucesso.set('');
         this.mensagemErro.set('');
        //  this.mensagemSucesso = '';
        //  this.mensagemErro = '';
      
         // Parsear destinatários (separados por vírgula)
         const destinatarios = this.formulario.value.destinatarios
           .split(',')
           .map((email: string) => email.trim());
      
         const request: EmailRequest = {
           destinatarios: destinatarios,
           assunto: this.formulario.value.assunto,
           corpo: this.formulario.value.corpo,
           anexos: []
         };
      
         this.emailService.enviarEmail(request).subscribe({
          next: (response) => {
            this.enviando.set(false);
    
            if (response.sucesso) {
              this.mensagemSucesso.set('✅ ' + response.mensagem);
              this.formulario.reset();
            } else {
              this.mensagemErro.set('❌ Erro ao enviar email: ' + response.mensagem);
            }
          },
          error: (error) => {
            this.enviando.set(false);
            this.mensagemErro.set(
              '❌ Erro ao enviar email: ' + (error.error?.mensagem || error.message)
            );
            console.error('Erro detalhado:', error);
          }
        });
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
      next: (token: string) => {
        this.loading = false;
        // Exemplo: redireciona para a página principal após o login
        console.log(token)

        // Salva o token recebido-----------------------------x------------------x----
         localStorage.setItem('token', token);
         
        this.router.navigate(['/welcome']);
      },
      error: (err) => {
        this.loading = false;
        console.error('Erro ao realizar login:', err);
        // Aqui você pode exibir uma mensagem de erro na tela para o usuário
      }
    });
  }
  onReset(): void {
    this.formulario.reset();
    this.mensagemSucesso.set('');
    this.mensagemErro.set('');
  }

}

