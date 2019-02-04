// angular required imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// important component imports
import { AppComponent } from './app.component';

// main opening import
import { MainPageComponent } from './main_page/main_page.component';

// parents section
import { WelcomeComponent } from './welcome_parents/welcome.component';
import { ShopParentsComponent } from './shop_parents/shop_parents.component';
import { ProductsParentsComponent } from './products_parents/products_parents.component';
import { SupportParentsComponent } from './support_parents/support_parents.component';
import { GamesParentsComponent } from './games_parents/games_parents.component';
import { LegoLifeParentsComponent } from './legoLife_parents/lego_life_parents.component';
import { AboutComponent } from './about_parents/about.component';

// childrens section
import { HomeComponent } from './home_children/home.component';
import { VideosComponent } from './videos_children/videos.component';
import { GamesComponent } from './games_children/games.component';
import { CharactersComponent } from './characters_children/characters.component';
import { SetsComponent } from './sets_children/sets.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'welcome/shop',
    component: ShopParentsComponent
  },
  {
    path: 'welcome/products',
    component: ProductsParentsComponent
  },
  {
    path: 'welcome/support',
    component: SupportParentsComponent
  },
  {
    path: 'welcome/games_parents',
    component: GamesParentsComponent
  },
  {
    path: 'welcome/legoLife',
    component: LegoLifeParentsComponent
  },
  {
    path: 'welcome/about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/videos',
    component: VideosComponent
  },
  {
    path: 'home/games',
    component: GamesComponent
  },
  {
    path: 'home/characters',
    component: CharactersComponent
  },
  {
    path: 'home/sets',
    component: SetsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
