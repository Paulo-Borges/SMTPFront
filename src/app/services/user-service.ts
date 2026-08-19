import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserModel } from '../models/userModel';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

export interface UserPayload {
  nome?: string;
  email?: string;
  cpf?: string;
  [Key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  private readonly ApiUrl = environment.apiUsersUrl;


  getUsers() {
    return this.http.get<UserModel[]>(this.ApiUrl);
  }

  criarUser(user: UserModel): Observable<void> {
    return this.http.post<void>(this.ApiUrl, user)
  }


  getUserFromToken(): UserPayload | null {
    const token = localStorage.getItem('token');
    console.log('Token encontrado:', token); // debug
    if (!token) return null;

    try {
      const decoded: UserPayload = jwtDecode(token);
      console.log('Token decodificado:', decoded); // debug
      return decoded;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }
}
