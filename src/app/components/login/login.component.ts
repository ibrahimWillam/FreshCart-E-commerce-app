import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';


@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private _AuthServiceService:AuthServiceService, private _Router:Router){}

    msgError:string='';
    isLoading:boolean=false;
  
    loginForm:FormGroup = new FormGroup({
  
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),

    
  
    })


    
  
    handelForm():void{
  
      if(this.loginForm.valid){
        this.isLoading=true;
        this._AuthServiceService.setLogin(this.loginForm.value).subscribe({
          next:(response)=>{
            this.isLoading=false;
  
            if(response.message=='success'){


            localStorage.setItem('eToken',response.token);
            this._AuthServiceService.saveUserData()    
            this._Router.navigate(['/home'])
  
            }
  
  
            console.log(response);
          },
    
          error:(err:HttpErrorResponse)=>{
            this.isLoading=false;
  
            this.msgError=err.error.message;
  
  
            console.log(err);
  
  
            
          } 
        })
    
        
      } else{
        this.loginForm.markAllAsTouched();
      }
      
    }


}
