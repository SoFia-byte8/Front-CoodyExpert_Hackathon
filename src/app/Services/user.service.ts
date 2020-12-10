import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl: String = 'https://coodyexpert-morse.herokuapp.com';
  constructor(
    private http: HttpClient
  ) { }
  login(formData){
    return this.http.post<User>(`${this.apiUrl}/login`, formData)
  }
  createUser(formData){
    return this.http.post<User>(`${this.apiUrl}/user/create`, formData);
  }
  
}
