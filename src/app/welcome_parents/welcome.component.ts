import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

import { ShopParentsComponent } from '../shop_parents/shop_parents.component';
import { ProductsParentsComponent } from '../products_parents/products_parents.component';
import { SupportParentsComponent } from '../support_parents/support_parents.component';
import { GamesParentsComponent } from '../games_parents/games_parents.component';
import { LegoLifeParentsComponent } from '../legoLife_parents/lego_life_parents.component';
import { AboutComponent } from '../about_parents/about.component';

import { HomeComponent } from '../home_children/home.component'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [AuthenticationService]
})
export class WelcomeComponent {
  items: Array<any> = [];
  user;
  private isLoggedIn: Boolean = null;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {

    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['welcome']);
      } else {
      this.isLoggedIn = true;
      this.userName = user.displayName;
      this.router.navigate(['welcome']);
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }
}
