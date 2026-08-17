import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { MembroModel } from '../models/membroModel';

@Injectable({
  providedIn: 'root',
})
export class MembroService {
    http = inject(HttpClient);
    private readonly ApiUrl = environment.apiUrl;
  
  
    getMembros() {
      return this.http.get<MembroModel[]>(this.ApiUrl);
    }
}
