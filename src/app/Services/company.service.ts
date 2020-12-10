import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../Models/Company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiURL: String = 'https://coodyexpert-morse.herokuapp.com';
  constructor(
    private http: HttpClient
  ) { }
  

  loginCompany(formData) {
    return this.http.post<Company>(`${this.apiURL}/loginCompany`, formData)
  }
  createCompany(formData) {
    return this.http.post<Company>(`${this.apiURL}/company/create`, formData)
  }
  getAll(){
    return this.http.get(`${this.apiURL}/company/getAll`)
  }
}
