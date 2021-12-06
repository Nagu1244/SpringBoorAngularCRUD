import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentForm } from '../student-form';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
    
  
  constructor(private studentService:StudentService,private router:Router) { }

  student={firstName:null,lastName:null,email:null,gender:null,phoneNumber:null};

  toggleForm:boolean=true;
  
  ngOnInit(): void {
  }
   gotoStudentsList()
   {
     this.router.navigate(['/students']);
   }
   
  Submit(form:NgForm)
  {
     //console.log("form",form);
     //console.log("model",this.student);
     this.studentService.createStudent(this.student).subscribe((data)=>
     {
       console.log("hint",data);
       
     },error=>{
     console.log("Model Exception",error);
     console.log("second");
     this.router.navigate(['/students']
     );
    })

     console.log("first");
  }
}
