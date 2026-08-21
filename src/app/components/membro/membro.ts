import { Component, inject } from '@angular/core';
import { MembroService } from '../../services/membro-service';
import { MembroModel } from '../../models/membroModel';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-membro',
  imports: [AsyncPipe],
  templateUrl: './membro.html',
  styleUrl: './membro.css',
})
export class Membro {
  private readonly membroService = inject(MembroService);

  membro$: Observable<MembroModel[]> = this.membroService.getMembros();


  ngOnInit(): void {
    this.membro$.subscribe({
      next: (dados) => {
        console.log(dados);
      }
    });
  }
}
