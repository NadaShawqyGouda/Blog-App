import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _userService:UserServicesService) { }

  posts:any= [];
  post:any;

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this._userService.getposts().subscribe({
      next:(res)=>{console.log(res); this.posts=res},
      error:(error)=>{console.log(error)}
    })
  }

}
