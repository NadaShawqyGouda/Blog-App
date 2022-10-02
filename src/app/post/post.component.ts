import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id:any;
  post:any;
  comments:any;
  commentForm!:FormGroup;
  newComment:any;
  userImage:any = ""

  constructor(private route:ActivatedRoute, public _userServices:UserServicesService, public Build:FormBuilder) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getpost();
    this.getComments();
    this.commentForm = this.Build.group({
      'postId':[this.id],
      'content':["", Validators.required],
      'username':[localStorage.getItem('username')],
      "userImage":[this.userImage]
    })
  }

  getpost(){
    this._userServices.getSinglePost(this.id).subscribe({
      next:(res) => {console.log(res); this.post = res},
      error:(error)=>{console.log(error)}
    })
  }

  getComments(){
    this._userServices.getPostComments(this.id).subscribe({
      next:(res)=>{console.log(res); this.comments=res},
      error:(err)=>{console.log(err)}
    })
  }

  addComment(){
    const model = this.commentForm.value;
    this._userServices.createComment(model).subscribe({
      next:(data)=>{console.log(data);this.getComments()},
      error:(err)=>{console.log(err)}
    })
  }

}
