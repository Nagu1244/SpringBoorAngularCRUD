import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg='';
  user={ userName:null, emailId:null, password:null };
  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
  

  }

  loginUser(form:NgForm)
  {
    console.log("form Data",form);
    console.log("Model",this.user);
    this.loginService.callLoginApi(this.user).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['/students']);
    }),
    console.error("Bad Credentials");
    this.msg="Bad Credentials,Please enter valid email id and password"
    
  }
}
