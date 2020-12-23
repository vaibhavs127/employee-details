import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getEmp(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
