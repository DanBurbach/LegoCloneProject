import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { GamesComponent } from './games/games.component';
import { CharactersComponent } from './characters/characters.component';
import { SetsComponent } from './sets/sets.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    GamesComponent,
    CharactersComponent,
    SetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
