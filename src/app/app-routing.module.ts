import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./layout/components/layout-page/layout-page.component";
import { AuthGuard } from "./auth/auth.guard";


const routes:Routes=[
    {
        path:'', redirectTo:'login', pathMatch:'full'
    },
    {
    path:'',
    loadChildren: ()=> import('./signup/signup.module').then((m)=> m.SignupModule)
    },
    // {
    //     path:'employee',
    //     loadChildren:()=>import('./employee/employee.module').then((m)=>m.EmployeeModule)
    //  },
    {
        path:'',
        component:LayoutPageComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'employee',
                loadChildren:()=>import('./employee/employee.module').then((m)=>m.EmployeeModule),
               
             }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}