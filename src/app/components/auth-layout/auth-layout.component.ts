import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavAuthComponent } from '../nav-auth/nav-auth.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent {
  constructor(){}

}
