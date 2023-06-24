import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  email:string|undefined;
  password:string|undefined;
  ngOnInit(): void {
  }

  login(){
    let data={
      "email": this.email,
      "password": this.password
    }
    this.loginService.login(data).subscribe(response=>console.log(response));
  }
}
