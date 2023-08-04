import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    SignupRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class SignupModule { }
