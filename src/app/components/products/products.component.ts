import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomService } from 'src/app/shared/services/ecom.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-products',

  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private _EcomService:EcomService , private _CartService:CartService,
    private _ToastrService:ToastrService, private _Renderer2:Renderer2,private _WishlistService:WishlistService){}
  products:Product[]=[]; 
  searchInput:string= '';
  wishList:any[]=[];


  addCart(id:string , el:HTMLButtonElement):void{
    this._Renderer2.setAttribute(el,'disable','true');
        this._CartService.addToCart(id).subscribe({
          next:(response)=>{
            console.log(response);
            this._ToastrService.success(response.message,"FreshCart");
            this._Renderer2.removeAttribute(el,'disable');
    
            this._CartService.cartNumber.next(response.numOfCartItems);
            
          },
    
          error:(err)=>{
            console.log(err);
            this._Renderer2.removeAttribute(el,'disable');
            
          }
        })
        
      }




      addFav(id:string):void{
        this._WishlistService.addToWishlist(id).subscribe({
          next:(res)=>{
            console.log(res);
            this._ToastrService.success(res.message);
            this.wishList=res.data;
          }
        })
    
      }
    
      deleteItem(id:string):void{
        this._WishlistService.deleteFromWishlist(id).subscribe({
          next:(res)=>{
            console.log(res);
          
            this._ToastrService.success(res.message);
            this.wishList=res.data;
    
            
          }
        })
      }
    
  ngOnInit(): void {

    // get all products..........
    this._EcomService.getAllProducts().subscribe({
      next:(response)=>{
        this.products= response.data;
        console.log(this.products);
        
      }
    })


    



 
  

  }

}
