import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomService } from 'src/app/shared/services/ecom.service';

@Component({
  selector: 'app-details',

  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcomService:EcomService ,
     private _Renderer2:Renderer2 ,private _CartService:CartService , private _ToastrService:ToastrService){}

  prductDetails:Product={}as Product;

  

  detailsSliders: OwlOptions = {
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

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{ 
        let idProduct:any=param.get('id');

        this._EcomService.getProductDetails(idProduct).subscribe({
          next:(response)=>{
            this.prductDetails=response.data;
            console.log(this.prductDetails);
            
          }
        })
      }
    })
  }
}
