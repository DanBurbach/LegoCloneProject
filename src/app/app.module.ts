// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// functional imports
import { routing } from './app.routing'

// component imports
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { GamesComponent } from './games/games.component';
import { CharactersComponent } from './characters/characters.component';
import { SetsComponent } from './sets/sets.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    WelcomeComponent
    AppComponent,
    HomeComponent,
    VideosComponent,
    GamesComponent,
    CharactersComponent,
    SetsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
