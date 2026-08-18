import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserModel } from '../models/userModel';
import { Observable } from 'rxjs';

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
}
