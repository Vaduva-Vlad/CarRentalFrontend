import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLoggedIn(){
    let token=localStorage.getItem("token")
    if(token!="" && token!=null){
      return true
    }
    else{
      return false
    }
  }

  logout(){
    localStorage.setItem('token',"")
    localStorage.setItem('user_id',"")
    localStorage.setItem('role_id',"")
  }

  isAdmin(){
    let role_id=localStorage.getItem('role_id')
    if(role_id=='3'){
      return true
    }
    return false
  }
}
