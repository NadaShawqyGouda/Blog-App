import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router, public _userService:UserServicesService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login'])
  }

}
