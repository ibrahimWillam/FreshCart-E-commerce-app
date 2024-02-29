import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor(private _HttpClient:HttpClient) { }

  forgotPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,userEmail )
  }

  resetCode(code:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,code)
  }

  resetPassword(pass:object):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,pass)
  }
}
