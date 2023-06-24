import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url="http://localhost/CarRentalApi/public/api/users/login"

  login(data:Object):Observable<any>{

    return this.http.post<any>(this.url,data);
  }
}
