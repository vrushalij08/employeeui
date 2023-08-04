import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../api/employee.service';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaryDetails:any;
  id:any;
  title = 'FormArray Example in Angular Reactive forms';
  skillsForm: FormGroup;

  constructor(
    private fb:FormBuilder, 
    private service:EmployeeService,
    private route: ActivatedRoute) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  
  }

  getSalaryDetails(){
   this.service.salaryDetails(this.id).subscribe((res:any)=>{
    this.salaryDetails=res;
   })
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    if(this.id){
      this.getSalaryDetails();
    }
  }

 
  
 
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
