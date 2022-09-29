import { Component, OnInit } from '@angular/core';
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

  constructor(private route:ActivatedRoute, public _userServices:UserServicesService) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getpost()
  }

  getpost(){
    this._userServices.getSinglePost(this.id).subscribe({
      next:(res) => {console.log(res); this.post = res},
      error:(error)=>{console.log(error)}
    })
  }

}
