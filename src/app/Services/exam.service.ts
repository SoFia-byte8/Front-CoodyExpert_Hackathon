import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from '../Models/Exam';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  apiUrl: String = 'https://coodyexpert-morse.herokuapp.com';
  constructor(
    private http: HttpClient
  ) { }
  createExam(formData){
    return this.http.post<Exam>(`${this.apiUrl}/exam/create`, formData)
  }
  getAll(){
    return this.http.get(`${this.apiUrl}/exam/getAll`)
  }
  
} 
