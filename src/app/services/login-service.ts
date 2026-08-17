import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
  private readonly ApiUrl = environment.apiLoginUrl;

  login(credentials: { email: string, password: string }) {
    return this.http.post<string>(this.ApiUrl, credentials, { responseType: 'text' as 'json'});
  }
}

