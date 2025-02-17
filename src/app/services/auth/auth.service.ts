import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  Subject,
  tap,
  throwError,
} from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiURL;

  private userSubject = new Subject<UserAuth>();
  user$ = this.userSubject.asObservable();

  private isUserAuthenticateSubject = new BehaviorSubject<boolean>(false);
  isUserAuthenticate$ = this.isUserAuthenticateSubject.asObservable();

  private isAdminAuthenticateSubject = new BehaviorSubject<boolean>(false);
  isAdminAuthenticate$ = this.isAdminAuthenticateSubject.asObservable();

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
      .post<{ token: string }>(this.apiUrl + '/login', body, httpOptions)
      .pipe(
        tap((value) => {
          localStorage.setItem('auth-token', value.token);
          this.authenticateUser()?.subscribe(() => {});
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
    localStorage.removeItem('auth-token');
    this.isUserAuthenticateSubject.next(false);
    this.isAdminAuthenticateSubject.next(false);
    this.router.navigate(['/home']);
  }

  authenticateUser(): Observable<UserAuth> | null {
    const token: String | null = localStorage.getItem('auth-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    if (token) {
      return this.http
        .post<UserAuth>(this.apiUrl + '/authenticate', token, httpOptions)
        .pipe(
          tap((user: UserAuth) => {
            this.userSubject.next(user);
            if (user.role === 'USER') {
              this.isUserAuthenticateSubject.next(true);
            }
            if (user.role === 'ADMIN') {
              this.isAdminAuthenticateSubject.next(true);
            }
            return user;
          }),
          catchError((error) => {
            this.logout();
            console.log('ERROR', error);
            return throwError(() => new Error(error));
          })
        );
    }
    return null;
  }
}

interface UserAuth {
  id: string;
  email: string;
  username: string;
  role: string;
}
