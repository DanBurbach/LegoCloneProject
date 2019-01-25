import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { ShopParentsComponent } from './shop_parents/shop-parents.component';
import { ProductsParentsComponent } from './products_parents/products-parents.component';
import { SupportParentsComponent } from './support_parents/support-parents.component';
import { GamesParentsComponent } from './games_parents/games-parents.component';
import { LegoLifeParentsComponent } from './legoLife_parents/lego-life-parents.component';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { GamesComponent } from './games/games.component';
import { CharactersComponent } from './characters/characters.component';
import { SetsComponent } from './sets/sets.component';


const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'shop',
    component: ShopParentsComponent
  },
  {
    path: 'products',
    component: ProductsParentsComponent
  },
  {
    path: 'support',
    component: SupportParentsComponent
  },
  {
    path: 'games_parents',
    component: GamesParentsComponent
  },
  {
    path: 'legoLife',
    component: LegoLifeParentsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'sets',
    component: SetsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
