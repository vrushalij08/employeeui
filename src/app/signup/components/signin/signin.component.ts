import { Component } from '@angular/core';
import { SignupService } from '../../api/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {
  email!: string;
  password!: string;

  constructor(
    private service:SignupService,
    private router:Router
  ){
    
  }
  
  onSubmit(form:any){
    console.log(form.value)
      this.service.login(form.value).subscribe((res:any)=>{
      //  console.log("login",res)
       sessionStorage.setItem("accessToken",res.token)
       this.router.navigate(["/employee/list"])
      })
      // this.service.getUserByToken().subscribe((res)=>{
      //   console.log(res)
      // })
  }
  
}
