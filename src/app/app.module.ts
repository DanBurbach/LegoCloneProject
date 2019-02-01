// @angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// functional imports
import { routing } from './app.routing'
import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

// parents component imports
import { WelcomeComponent } from './welcome_parents/welcome.component';
import { ShopParentsComponent } from './shop_parents/shop_parents.component';
import { ProductsParentsComponent } from './products_parents/products_parents.component';
import { SupportParentsComponent } from './support_parents/support_parents.component';
import { GamesParentsComponent } from './games_parents/games_parents.component';
import { LegoLifeParentsComponent } from './legoLife_parents/lego_life_parents.component';
import { AboutComponent } from './about_parents/about.component';

// children component imports
import { HomeComponent } from './home_children/home.component';
import { VideosComponent } from './videos_children/videos.component';
import { GamesComponent } from './games_children/games.component';
import { CharactersComponent } from './characters_children/characters.component';
import { SetsComponent } from './sets_children/sets.component';

// top main page select here to go to either the parents or childrens pages
import { MainPageComponent } from './main_page/main_page.component';

// important import files for authentication
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WelcomeComponent,
    ShopParentsComponent,
    ProductsParentsComponent,
    SupportParentsComponent,
    GamesParentsComponent,
    LegoLifeParentsComponent,
    AboutComponent,
    HomeComponent,
    VideosComponent,
    GamesComponent,
    CharactersComponent,
    SetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2CarouselamosModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
