import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./component/list/list.component";
import { SalaryComponent } from "./component/salary/salary.component";

const routes:Routes=[
    {path:'list',component:ListComponent},
    {path:'salary',component:SalaryComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class EmployeeRoutingModule{

}