import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './shared/guardes/auth.guard';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllorderesComponent } from './components/allorderes/allorderes.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  // {
  //   path:'',canActivate:[authGuard],
  //   loadComponent:()=>import('./components/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
  //   children:[
  //     {path:'',redirectTo:'home',pathMatch:'full'},
  //     {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'Home'},
  //     {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:'Cart'},
  //     {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:'Products'},
  //     {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:'Brands'},
  //     {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'Categories'},

  //   ]
  // },{

  //   path:'',
  //   loadComponent:()=>import('./components/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  //   children:[
  //     {path:'',redirectTo:'login',pathMatch:'full'},
  //     {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'Login'},
  //     {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:'Register'},

      
  //   ]

  // },
  {
    path:'',
    canActivate:[authGuard],
    component:BlankLayoutComponent,children:[
      {path:'',redirectTo:'home',pathMatch:'full',title:'home'},
      {path:'home',component:HomeComponent,title:'home'},
      {path:'cart',component:CartComponent,title:'cart'},
      {path:'wishList',component:WishListComponent,title:'Wish list'},
      {path:'allorders',component:AllorderesComponent,title:'Wish list'},
      {path:'payment/:id',component:PaymentComponent,title:'Allorders'},
      {path:'details/:id', component:DetailsComponent,title:'detailes'},
      {path:'products',component:ProductsComponent,title:'products'},
      {path:'categories',component:CategoriesComponent,title:'catigories'},
      {path:"brands",component:BrandsComponent,title:'brands'},
    ]
  },
  {
    path:'',component:AuthLayoutComponent,children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent,title:'login'},
      {path:'register',component:RegisterComponent,title:'register'},
      {path:'forgetPassword',component:ForgetPasswordComponent,title:'ForgetPassword'},

    ]
  },






  {path:'**',component:NotFoundComponent,title:'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
