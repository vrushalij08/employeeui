import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './component/list/list.component';
import { FormComponent } from './component/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SalaryComponent } from './component/salary/salary.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    SalaryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule,
    HttpClientModule
  ],
  bootstrap:[ListComponent]
})
export class EmployeeModule { }
