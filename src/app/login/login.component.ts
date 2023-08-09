import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform:any;  
  Username:string = '';
  Password: string = '';

  ngOnInit(){
    this.loginform = new FormGroup({
      Username:new FormControl('',Validators.required),
      Password:new FormControl('',Validators.required)
    })
      
  }
onSubmit(value:any){  
  console.log(value)
}
Login(){
  // if (this.Username! == '' && this.Password!== '')
  this.router.navigate(['/Dashboard']);
}
constructor(public formBuilder:FormBuilder, public router:Router){}

}
