// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// functional imports
import { routing } from './app.routing'
import { AppComponent } from './app.component';

// parents component imports
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopParentsComponent } from './shop-parents/shop-parents.component';
import { ProductsParentsComponent } from './products-parents/products-parents.component';
import { SupportParentsComponent } from './support-parents/support-parents.component';
import { GamesParentsComponent } from './games-parents/games-parents.component';
import { LegoLifeParentsComponent } from './lego-life-parents/lego-life-parents.component';
import { AboutComponent } from './about/about.component';

// children component imports
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { GamesComponent } from './games/games.component';
import { CharactersComponent } from './characters/characters.component';
import { SetsComponent } from './sets/sets.component';





@NgModule({
  declarations: [
    WelcomeComponent,
    AppComponent,
    HomeComponent,
    VideosComponent,
    GamesComponent,
    CharactersComponent,
    SetsComponent,
    AboutComponent,
    ShopParentsComponent,
    ProductsParentsComponent,
    SupportParentsComponent,
    GamesParentsComponent,
    LegoLifeParentsComponent,
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
