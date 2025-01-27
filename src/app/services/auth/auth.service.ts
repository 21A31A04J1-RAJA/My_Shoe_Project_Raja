import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080/api/auth';
  private isUserAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<AuthResponse>(this.apiUrl + '/login', body, httpOptions)
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('role', value.role);
        })
      );
  }

  signup(email: string, password: string, name: string): Observable<any> {
    const body = {
      email: email,
      password: password,
      name: name,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<AuthResponse>(this.apiUrl + '/register', body, httpOptions)
      .pipe(
        tap((value) => {
          console.log('Register sucessfully done', value);
        })
      );
  }

  logout() {
    sessionStorage.clear();
    // sessionStorage.setItem('role', value.role);
    this.isUserAuthenticated = false;
  }
  isAuthenticated() {
    return this.isUserAuthenticated;
  }
}
type AuthResponse = {
  token: string;
  role: string;
};
