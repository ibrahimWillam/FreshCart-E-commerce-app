import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-categories',

  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private _CategoriesService:CategoriesService){}
categoriesData:any={}

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=>{
        console.log(this.categoriesData);
        this.categoriesData=response.data
        
      }
    })
  }
}
