import { Component, OnInit } from '@angular/core';

import { ShopParentsComponent } from './shop-parents/shop-parents.component';
import { ProductsParentsComponent } from './products-parents/products-parents.component';
import { SupportParentsComponent } from './support-parents/support-parents.component';
import { GamesParentsComponent } from './games-parents/games-parents.component';
import { LegoLifeParentsComponent } from './lego-life-parents/lego-life-parents.component';
import { AboutComponent } from './about/about.component';

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
