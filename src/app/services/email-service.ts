import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { EmailHealtResponse, EmailRequest, EmailResponse, EmailValidationResponse } from '../models/emailModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = environment.apiEmailUrl;

  constructor(private http: HttpClient) {}

  enviarEmail(request: EmailRequest): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(`${this.apiUrl}/enviar`, request)
  }

  validarEmail(email: string): Observable<EmailValidationResponse> {
    return this.http.post<EmailValidationResponse>(`${this.apiUrl}/validar`, `"${email}"`)
  }

  health(): Observable<EmailHealtResponse> {
       return this.http.get<EmailHealtResponse>(`${this.apiUrl}/health`);
     }

}
