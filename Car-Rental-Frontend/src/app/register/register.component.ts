import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) { }
  name:string|undefined;
  email:string|undefined;
  address:string|undefined;
  password:string|undefined;
  phone:string|undefined

  ngOnInit(): void {
  }

  register(){
    let data={
      "name": this.name,
      "email": this.email,
      "password": this.password,
      "c_password":this.password,
      "address": this.address,
      "phone":this.phone
    }

    this.registerService.register(data).subscribe(response=>{});
  }
}
