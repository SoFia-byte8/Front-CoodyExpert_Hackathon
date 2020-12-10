import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private auth =   new BehaviorSubject<{}>(null);
  //auth => Variable reactiva
  auth$ = this.auth.asObservable();// Indica que nos podemos suscribir, osea escuchar los cambios 
  constructor() { 
    this.auth.next(this.dataUser())
  }
  saveToken(token){
    localStorage.setItem('session', token)
    this.auth.next(this.dataUser())//Actualiza variable auth
  } 
  getToken(){
    return localStorage.getItem('session')
  }
  dataUser(){
    const token = this.getToken()
    if (!token) {
      return null
    }
    let urlBase64 = token.split('.')[1]
    let b64 = urlBase64.replace('-', '+').replace('_', '/')//Facilitar al algoritmo de encriptacion la decodificacion de la informacion 

    return JSON.parse(this.decodeData(b64))
  } 
  decodeData(string){
    return decodeURIComponent( atob(string).split('').map(
      function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16) ).slice(-2)
      }
    ).join('') )
  }
  removeSession(){
    localStorage.removeItem('session')
    this.auth.next(null)
  }
}
