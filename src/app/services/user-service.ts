import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  private readonly ApiUrl = environment.apiUrl;


  getUsers() {
    return this.http.get<UserModel[]>(this.ApiUrl);
  }
}
