import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MainPageComponent } from './main_page/main_page.component';

import { WelcomeComponent } from './welcome_parents/welcome.component';
import { ShopParentsComponent } from './shop_parents/shop_parents.component';
import { ProductsParentsComponent } from './products_parents/products_parents.component';
import { SupportParentsComponent } from './support_parents/support_parents.component';
import { GamesParentsComponent } from './games_parents/games_parents.component';
import { LegoLifeParentsComponent } from './legoLife_parents/lego_life_parents.component';
import { AboutComponent } from './about_parents/about.component';

import { HomeComponent } from './home_children/home.component';
import { VideosComponent } from './videos_children/videos.component';
import { GamesComponent } from './games_children/games.component';
import { CharactersComponent } from './characters_children/characters.component';
import { SetsComponent } from './sets_children/sets.component';


const appRoutes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
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
