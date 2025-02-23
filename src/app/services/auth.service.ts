import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface LoginResponseData {
  token: string;
  isSuperUser: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  sigup(credentials: {
    username: string;
    password: string;
  }): Observable<ApiResponse<LoginResponseData>> {
    return this.http.post<ApiResponse<LoginResponseData>>(
      `${this.baseUrl}/signup`,
      credentials
    );
  }

  login(credentials: {
    username: string;
    password: string;
  }): Observable<ApiResponse<LoginResponseData>> {
    return this.http.post<ApiResponse<LoginResponseData>>(
      `${this.baseUrl}/login`,
      credentials
    );
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
