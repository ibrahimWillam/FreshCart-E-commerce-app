import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',

  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor( private _CartService:CartService , private _Renderer2:Renderer2){}

  cardData:any=null;

  deleteItem(id:string):void{
    this._CartService.removeItem(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.cardData= response.data;
        this._CartService.cartNumber.next(response.numOfCartItems);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }


  deleteCart():void{
    this._CartService.clearCart().subscribe({
      next:(response)=>{
        console.log(response);
        
        if(response.message==='success'){

          this.cardData=null;
        this._CartService.cartNumber.next(0);

        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  updateCount(id:string,count:number , el1:HTMLButtonElement , el2:HTMLButtonElement):void{


    this._Renderer2.setAttribute(el1 , 'disable' , 'true');
    this._Renderer2.setAttribute(el2 , 'disable' , 'true');
    if (count>=1){
      this._CartService.updateItem(id,count).subscribe({
        next:(response)=>{
          console.log(response);
          this.cardData= response.data;
    this._Renderer2.removeAttribute(el1 , 'disable' );
    this._Renderer2.removeAttribute(el1 , 'disable' );
          
  
          
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(el1 , 'disable' );
          this._Renderer2.removeAttribute(el1 , 'disable' );
        }
      })
    }

  }

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        this.cardData=response.data;
        console.log(this.cardData);

        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
