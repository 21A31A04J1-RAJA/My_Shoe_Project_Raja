import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080/api';
  // private isUserAuthenticated: boolean = false;
  // private isAdmin = false;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

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
          if (value.role === 'ADMIN') {
            this.isAuthenticatedSubject.next(true);
          }
        })
      );
  }

  signup(email: string, password: string, name: string): Observable<any> {
    const body = {
      username: name,
      email: email,
      password: password,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.apiUrl + '/register', body, httpOptions).pipe(
      tap((value) => {
        console.log('Register sucessfully done', value);
      })
    );
  }

  logout() {
    sessionStorage.clear();
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/home']);
    // this.isUserAdmin();
  }

  // isAuthenticated() {
  //   return this.isUserAuthenticated;
  // }

  // isUserAdmin() {
  //   const authToken = sessionStorage.getItem('auth-token');
  //   const user = sessionStorage.getItem('role');
  //   if (authToken && user === 'ADMIN') {
  //     this.isAdmin = true;
  //   }
  //   return this.isAdmin;
  // }
}
type AuthResponse = {
  token: string;
  role: string;
};
