import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(public router:Router, public _userService:UserServicesService, private build:FormBuilder) { }

  img:Boolean=false;
  file:any;
  base64:any;
  username:any = localStorage.getItem('username');

  postForm!:FormGroup;

  ngOnInit(): void {
    this.postForm = this.build.group({
      'title':["",Validators.required],
      'desc':["",Validators.required],
      'username': [ this.username,Validators.required],
      'categories': ["",Validators.required],
      'image': ["",Validators.required],
    })
  }

  onChange(event:any){
    this.img = false;
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.postForm.get('image')?.setValue(this.base64);
    }
    this.img = true;
  }

  addPost(){
    const model = this.postForm.value;
    this._userService.addPost(model).subscribe({
      next:(data)=>{console.log(data); this.router.navigate(['/home'])},
      error:(err)=>{'it is'+console.log(err)}
    })
  }

}
