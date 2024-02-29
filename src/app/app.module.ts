import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TermTextPipe } from './term-text.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AllorderesComponent } from './components/allorderes/allorderes.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './shared/services/shared/interceptors/loading.interceptor';
@NgModule({
  declarations: [AppComponent,AuthLayoutComponent,BlankLayoutComponent,
  BrandsComponent,CartComponent,CategoriesComponent,DetailsComponent,FooterComponent,
HomeComponent,LoginComponent,NavAuthComponent,NavBlankComponent,NotFoundComponent,ProductsComponent
,RegisterComponent, TermTextPipe, SearchPipe, WishListComponent, PaymentComponent, AllorderesComponent, ForgetPasswordComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,


   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
