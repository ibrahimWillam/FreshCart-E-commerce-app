import { ForgetpassService } from 'src/app/shared/services/forgetpass.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private _ForgetpassService:ForgetpassService , private _Router:Router){}
step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
email:string='';

msg:string='';

forgetEmail:FormGroup=new FormGroup({
  email:new FormControl('')
})


resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl('')
})

resetPassword:FormGroup=new FormGroup({
  email:new FormControl(''),
  newPassword:new FormControl('')
})

forgetPassword():void{

  let userEmail = this.forgetEmail.value;
  this.email=userEmail.email;

  this._ForgetpassService.forgotPassword(userEmail).subscribe({
    next:(response)=>{
      console.log(response);
      this.msg=response.message
      this.step1=false;
      this.step2=true;
      
    },
    error:(err)=>{
      this.msg=err.error.message
      
    }
  })


}



resetCode():void{
  let resetcode = this.resetCodeForm.value;
  this._ForgetpassService.resetCode(resetcode).subscribe({
    next:(response)=>{
      this.msg=response.message
      this.step2=false;
      this.step3=true;
      console.log(response);
      

    },
    error:(err)=>{
      this.msg=err.error.message
    }
    
  })
}



resetNewPassword():void{
  let userData = this.resetPassword.value;
  

  this._ForgetpassService.resetPassword(userData).subscribe({
    next:(response)=>{
      console.log(response);
      
      
      this._Router.navigate(['/login'])
      

    },   error:(err)=>{
      this.msg=err.error.message
    }
  })


}
}





