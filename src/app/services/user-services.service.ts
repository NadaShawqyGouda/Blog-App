import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  URL:String = 'https://nada-blog-api.herokuapp.com/api/';
  constructor(public httpClient:HttpClient) { }

  getposts(){
    return this.httpClient.get(this.URL +'posts');
  }

  getSinglePost(id:any){
    return this.httpClient.get(this.URL+'posts/find/'+id)
  }

  login(data:any){
    return this.httpClient.post(this.URL+ 'auth/login', data)
  }

  register(data:any){
    return this.httpClient.post(this.URL+'auth/register', data)
  }

  addPost(data:any){
    return this.httpClient.post(this.URL+'posts' , data)
  }

  createComment(data:any){
    return this.httpClient.post(this.URL+'comments' , data)
  }

  getPostComments(postId:any){
    return this.httpClient.get(this.URL+'comments?qPost='+postId)
  }

  isLogged(){
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }

  fetchToken(){
    return localStorage.getItem('token')
  }
}
