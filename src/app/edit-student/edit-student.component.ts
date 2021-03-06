import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentId:number=0;
  student={firstName:null,lastName:null,email:null,gender:null,phoneNumber:null};
  constructor(private activateRoute:ActivatedRoute,private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
   console.log(this.activateRoute.snapshot.params['id']);
    this.studentId=this.activateRoute.snapshot.params['id'];
    this.studentService.getStudentById(this.studentId).subscribe((data:any)=>
    {
      this.student=data;
    })
     
     }

  

  editStudentForm()
  {
    this.studentService.updateStudent(this.studentId,this.student).subscribe((data)=>
    {
      console.log(data);
      
    },error=>
    {
     console.log("Model Exception",error);
     this.router.navigate(['/students'])
    })
    

  }


}
