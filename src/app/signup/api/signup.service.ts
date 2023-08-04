import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http:HttpClient
  ) { }

  login(obj:any){
    return this.http.post('http://localhost:3000/user/check',obj)
  }

  getUserByToken(){
    return this.http.get('http://localhost:3000/user/auth/user')
  }
  
}
