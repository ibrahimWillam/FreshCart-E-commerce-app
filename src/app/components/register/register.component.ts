import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-register',

  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthServiceService:AuthServiceService , private _Router:Router){}

  msgError:string='';
  isLoading:boolean=false;

  registerForm:FormGroup = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    phone:new FormControl("",[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  

  })

  handelForm():void{

    if(this.registerForm.valid){
      this.isLoading=true;
      this._AuthServiceService.setRigester(this.registerForm.value).subscribe({
        next:(response)=>{
          this.isLoading=false;

          if(response.message=='success'){
          this._Router.navigate(['/login'])

          }


          console.log(response);
        },
  
        error:(err:HttpErrorResponse)=>{
          this.isLoading=false;

          this.msgError=err.error.message;


          console.log(err);


          
        }
      })
  
      
    }
    
  }

}
