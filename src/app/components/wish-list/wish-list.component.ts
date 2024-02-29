import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
constructor(private _WishlistService:WishlistService , private _Renderer2:Renderer2,
  private _CartService:CartService , private _ToastrService:ToastrService
  ){}

products:Product[]=[]; 
cardData:any=null;




addCart(id:string , el:HTMLButtonElement):void{
  this._Renderer2.setAttribute(el,'disable','true');
      this._CartService.addToCart(id).subscribe({
        next:(response)=>{
          console.log(response);
          this._ToastrService.success(response.message,"FreshCart");
          this._Renderer2.removeAttribute(el,'disable');
  
          this._CartService.cartNumber.next(response.numOfCartItems);

          // delete it

          this._WishlistService.deleteFromWishlist(id).subscribe({
            next:(res)=>{
              console.log(res);
        
            
    
              this._WishlistService.getToWishlist().subscribe({
                next:(response)=>{
                  console.log(response);
                  this.cardData=response.data;
                  
                }
              })
              
            }
          })


          
        },
  
        error:(err)=>{
          console.log(err);
          this._Renderer2.removeAttribute(el,'disable');
          
        }
      })
      
    }
  


    deleteItem(id:string):void{
      this._WishlistService.deleteFromWishlist(id).subscribe({
        next:(res)=>{
          console.log(res);
    
          this._ToastrService.success(res.message);

          this._WishlistService.getToWishlist().subscribe({
            next:(response)=>{
              console.log(response);
              this.cardData=response.data;
              
            }
          })
          
        }
      })
    }


ngOnInit(): void {
  this._WishlistService.getToWishlist().subscribe({
    next:(response)=>{
      console.log(response);
      this.cardData=response.data;
      
    }
  })
}
}
