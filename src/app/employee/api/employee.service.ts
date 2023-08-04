import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http:HttpClient
  ) { }

  getList(){
    return this.http.get('employee',{responseType:'json'})
  }
  addData(data:any){
    return this.http.post('employee',data,{headers:{'Content-Type':'application/json'}})
  }

  getById(id:any){
    return this.http.get('employee/'+id)
  }

  update(id:any,body:any){
    return this.http.patch('employee/'+id,body)
  }

  delete(id:any){
    return this.http.delete('employee/'+id)
  }

  salaryDetails(id:any){
   return this.http.get('salary/employee/'+id)
  }
}
