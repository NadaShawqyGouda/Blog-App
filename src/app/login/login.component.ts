import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _userService:UserServicesService, public router:Router) { }

  loginForm:FormGroup = new FormGroup({
    'email' : new FormControl(null,[Validators.required, Validators.email]),
    'password': new FormControl(null,Validators.required)
  })

  ngOnInit(): void {
  }

  login(data:any){
    if(data.valid){
      this._userService.login(data.value).subscribe({
        next:(res:any)=>{
          localStorage.setItem('token', `Bearer ${res.accessToken}`);
          localStorage.setItem('username', res.username);
          const isAdmin = res.accessToken;
          if(isAdmin){
            this.router.navigate(['/home'])
          }else{
            this.router.navigate(['/home'])
          }
        },
        error:(error)=>{
          // handle unauthorized error
          if(error instanceof HttpErrorResponse){
            if(error.status === 401){
              this.router.navigate(['/login'])
            }
          }
        }
      })
    }else{
      console.log('error')
    }
  }

}
