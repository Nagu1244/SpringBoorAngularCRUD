import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Student} from '../student';
import {StudentService} from '../student.service'
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: [`
  .th{
    background-color:blue;
    color:white;
  }`]
})
export class StudentListComponent implements OnInit {

   students: Student[]=[];
  constructor(private studentService:StudentService,private route:Router) { }
     
  ngOnInit(): void {
   
   this.getStudents();
   
}

  getStudents()
  {
    this.studentService.getStudentsList().subscribe( (data:any) =>{
      this.students= data;
    })
  }
  
  deleteStudent(id:number)
  {
      this.studentService.deleteStudentById(id).subscribe((data:any)=>
      {
        console.log(data);
       
      })
      
     
     
     
      
  }
  
    
}
function reload() {
  throw new Error('Function not implemented.');
}

