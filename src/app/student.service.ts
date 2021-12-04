import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { Student } from './student';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

   baseURl:any="http://localhost:8080/api/v1/allStudents";
   baseURl2:any="http://localhost:8080/api/v1/add";
   //baseURl3:any="http://localhost:8080/api/v1/id";
   API="http://localhost:8080/api/v1/";
   baseURl3="http://localhost:8080/api/v1/update/id"  ;

  constructor(private httpClient:HttpClient) { }

  getStudentsList()
  {
    return this.httpClient.get(this.baseURl);
  }
  createStudent(formvalues:any)
  {
    return this.httpClient.post(this.baseURl2,formvalues);
  }
  
  getStudentById(id:string | number):Observable<Student[]>
  {
       return this.httpClient.get<Student[]>(this.API +id);
  }
  updateStudent(studentId:any,updatedStudent:any)
  {
      return this.httpClient.put(this.baseURl3,updatedStudent);
  }
}
