import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServicesService } from './user-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _userService: UserServicesService, private _router:Router){}

  canActivate():boolean{
    if(this._userService.isLogged()){
      return true
    }else{
      this._router.navigate(['/login']);
      return false
    }
  }


}
