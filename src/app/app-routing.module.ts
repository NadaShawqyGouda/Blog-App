import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    component: PostComponent,
    path: "post/:id"
  },
  {
    component: LoginComponent,
    path: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
