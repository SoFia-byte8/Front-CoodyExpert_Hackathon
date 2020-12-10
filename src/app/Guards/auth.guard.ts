import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from '../Services/storage.service';
import {StorageCompanyService} from '../Services/storage-company.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private StorageService: StorageService, 
    private StorageCompanyService: StorageCompanyService,
    private router: Router, 

  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.StorageService.getToken() !=null) {
      console.log(route.data.only)
      const infoUser = this.StorageService.dataUser()
      if ((infoUser.role == 'Programador' && route.data.only == 'Programador')|| !route.data.only) {
        return true
      }else{
        alert('No tienes permiso para ingresar a esa pagina')
        this.router.navigate(['/'])
        return false
      }
    }else {
      this.router.navigate(['/login'])
      return false;
    }
    
  }
  canActivateCompany(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.StorageCompanyService.getToken() !=null) {
      console.log(route.data.only)
      const infoCompany = this.StorageCompanyService.dataCompany()
      if ((infoCompany.role == 'Company' && route.data.only == 'Company')|| !route.data.only) {
        return true
      }else{
        alert('No tienes permiso para ingresar a esa pagina')
        this.router.navigate(['/'])
        return false
      }
    }else {
      this.router.navigate(['/login'])
      return false;
    }
    
  }
}
