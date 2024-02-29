import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-allorderes',
  templateUrl: './allorderes.component.html',
  styleUrls: ['./allorderes.component.css']
})
export class AllorderesComponent implements OnInit {
  constructor(private _CartService:CartService){}
ngOnInit(): void {
  this._CartService.clearCart().subscribe({
    next:(res)=>{
      console.log(res);
      
    }
  })
}
}
