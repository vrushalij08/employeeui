import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../api/employee.service';
import * as _moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  formSubmitted = false;
  myForm!:FormGroup;
  moment = _moment; 
  id:any;
  formData:any

  constructor(
    private fb:FormBuilder,
    private service:EmployeeService,
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
   
  }

  intialize(){
    this.myForm = this.fb.group({
     name:["",Validators.required],
     age:["",Validators.required],
     email:["",[Validators.required, Validators.email]],
     phoneNo:[,Validators.required],
     dob:[],
     gender:[],
     education:[],
    })
  }

  Submit(form:FormGroup){
    //form.value.dob=this.moment(form.value.dob,"dd/mm/yy");
    console.log(form,form.get('email'))
    this.formSubmitted=true;
    if(form.valid){
      if(this.id){
      this.update(form.value)
      }else{
        this.add(form.value)
      }
    }
  }

  add(data:any){
    this.service.addData(data).subscribe((res:any)=>{
      this.dialogRef.close();
    })
  }

  get valid(){
    return this.myForm.controls
  }

  getEmployeeData(){
  this.service.getById(this.id).subscribe((response:any)=>{
    this.formData=response;
    this.myForm.patchValue({
      name:response.name,
      age:response.age,
      dob:response.dob,
      education:response.education,
      gender:response.gender,
      email:response.email,
      phoneNo:response.phoneNo
    });
  })
  }

  update(data:any){
    this.service.update(this.id,data).subscribe((res:any)=>{
      this.dialogRef.close();
    })
  }

  ngOnInit(): void {
    this.intialize();
    this.id=this.dialogRef.componentInstance.data.id;
    if(this.id){
      this.getEmployeeData()
    }
  }

}
