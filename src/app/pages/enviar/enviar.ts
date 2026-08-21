import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email-service';
import { EmailRequest } from '../../models/emailModel';

@Component({
  selector: 'app-enviar',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './enviar.html',
  styleUrl: './enviar.css',
})
export class Enviar implements OnInit {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);


  formulario!: FormGroup;
  enviando = signal(false);
  mensagemSucesso = signal('');
  mensagemErro = signal('');

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

  onSubmit() {
    this.router.navigate(['/home']);
  
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

  ngOnInit(): void {
    this.inicializarFormulario();
    this.verificarSaude();
  }

  onReset(): void {
    this.formulario.reset();
    this.mensagemSucesso.set('');
    this.mensagemErro.set('');
  }
}
