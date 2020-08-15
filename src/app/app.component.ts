import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import{PasswordChecker} from './custom-validators/password.checker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm: FormGroup;
  subimitted = false;

  constructor(private frombuilder: FormBuilder){}

ngOnInit(){
  this.registerForm=this.frombuilder.group({
    firstName: ['', Validators.required,],
    lastName: ['', Validators.required],
    email : ['', Validators.required,Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    acceptTnC: [false, Validators.requiredTrue]
  }, {
    validators: PasswordChecker('password','confirmPassword'),
  });
}
get h(){
  return this.registerForm.controls;
}

onSubmit(){
  this.subimitted=true;

  if(this.registerForm.invalid){
    return;
  }
  console.table(this.registerForm.value);
  console.table(this.registerForm);
  alert("Success Signup\n" +JSON.stringify(this.registerForm.value));
}

onReset(){
 this.subimitted=false; 
 this.registerForm.reset();
}
}
