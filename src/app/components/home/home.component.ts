import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomService } from 'src/app/shared/services/ecom.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _EcomService:EcomService , private _CartService:CartService ,
     private _ToastrService:ToastrService, private _Renderer2:Renderer2,
     private _WishlistService:WishlistService){}

  products:Product[]=[]; 

  categories:any[]=[];

  wishList:any[]=[];

  searchInput:string= '';

  categoriesOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  mainSliders: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
 items:1,
    nav: false
  }


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


    //  get categories ...................

    this._EcomService.getAllCategories().subscribe({
      next:(response)=>{

        this.categories = response.data;

        console.log(this.categories);
        

        

      }
    })



    // add TO Cart.................


 
  

  }

}
