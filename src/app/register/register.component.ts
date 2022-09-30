import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( public router:Router, public _userService:UserServicesService, private build:FormBuilder) { }

  file:any;
  base64:any;
  img:Boolean=false;
  registerForm!:FormGroup;

  ngOnInit(): void {
    this.registerForm = this.build.group({
      'title':["",Validators.required],
      'username':["",Validators.required],
      'email': ["",Validators.required],
      'password': ["",Validators.required],
      'profileImg': [""],
      'gender': ["",Validators.required],
    })
  }

  onChange(event:any){
    this.img = false;
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.registerForm.get('profilePic')?.setValue(this.base64);
    }
    this.img = true;
  }

  register(){
    const model = this.registerForm.value;
    this._userService.register(model).subscribe({
      next:(data)=>{console.log(data); this.router.navigate(['/login'])},
      error:(err)=>{console.log(err)}
    })
  }

}
