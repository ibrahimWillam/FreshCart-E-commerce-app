import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomService } from 'src/app/shared/services/ecom.service';

@Component({
  selector: 'app-nav-blank',

  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent  implements OnInit {
  constructor(private _AuthServiceService:AuthServiceService, private _CartService:CartService){}
  cartNum:number=0;
 ngOnInit(): void {
   this._CartService.cartNumber.subscribe({
    next:(resp)=>{
      
      console.log('nave'+ resp);

      this.cartNum=resp;
      
    }
   })
   this._CartService.getUserCart().subscribe({
    next:(response)=>{
      this.cartNum=response.numOfCartItems;

    }
   })
 }
  setUserOut():void{
    this._AuthServiceService.signOut()
  }

}
