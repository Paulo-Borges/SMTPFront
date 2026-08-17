import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
private readonly router = inject(Router)



onSubmit() {
  this.router.navigate(['/home']);

}

}
