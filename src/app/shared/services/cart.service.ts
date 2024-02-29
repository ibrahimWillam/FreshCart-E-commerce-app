import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  headers:any={ token: localStorage.getItem('eToken')};

  cartNumber:BehaviorSubject<number>=new BehaviorSubject(0);




  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {productId:productId},

      {headers:  this.headers}

    )
  }




  getUserCart():Observable<any>{
  return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
      headers:this.headers
    })
  }

  removeItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers:this.headers})
  }

  updateItem(id:string , count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{ "count": count},
    {headers:this.headers})
  }


  clearCart():Observable<any>{
  return  this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {
      headers:this.headers
    })
  }

  chekOut(id:any,orderInfo:object):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
   {
    "shippingAddress":orderInfo
},
{headers:this.headers}
)
  }

}
