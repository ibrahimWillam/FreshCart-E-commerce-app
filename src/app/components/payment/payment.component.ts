import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}

cardId:any=''


orderForm:FormGroup=new FormGroup({
  details:new FormControl(''),
  phone:new FormControl(''),
  city:new FormControl(''),
})

handelForm():void{
  console.log(this.orderForm.value);
  this._CartService.chekOut(this.cardId,this.orderForm.value).subscribe({
    next:(response)=>{
      console.log(response);
      if(response.status=="success"){
        window.open(response.session.url,'_self')
      }
      

    }
  })
  
}


ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.cardId=params.get('id')
      
    }
  })
}
}
