import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { GamesComponent } from './games/games.component';
import { CharactersComponent } from './characters/characters.component';
import { SetsComponent } from './sets/sets.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
  {
    path: 'games',
    component: GamesComponent
  }
  {
    path: 'characters',
    component: CharactersComponent
  }
  {
    path: 'sets',
    component: SetsComponent
  }
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
