import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-criar-user',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './criar-user.html',
  styleUrl: './criar-user.css',
})
export class CriarUser {
private readonly router = inject(Router);
private readonly userService = inject(UserService);
private readonly fb = inject(FormBuilder);

form = this.fb.group({
  nome: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
});

  onVoltar() {
    this.router.navigate(['/login'])
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.userService.criarUser(this.form.value as any).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => console.log('erro ao cadastrar:', err),
    });
  }
}
