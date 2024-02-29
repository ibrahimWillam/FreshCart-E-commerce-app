import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  headers:object={headers:{token:localStorage.getItem('eToken')}}

  constructor(private _HttpClient:HttpClient) { }

  addToWishlist(prodid:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:prodid},
    this.headers
    )
  }


  getToWishlist():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    this.headers
    )
  }

  deleteFromWishlist(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
    this.headers
    )
  }


}
