import { Component, OnInit } from '@angular/core';

import { ShopParentsComponent } from './shop_parents/shop_parents.component';
import { ProductsParentsComponent } from './products_parents/products_parents.component';
import { SupportParentsComponent } from './support_parents/support_parents.component';
import { GamesParentsComponent } from './games_parents/games_parents.component';
import { LegoLifeParentsComponent } from './legoLife_parents/lego_life_parents.component';
import { AboutComponent } from './about_parents/about.component';

import { HomeComponent } from './home_children/home.component'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
