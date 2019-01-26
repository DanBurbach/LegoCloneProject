import { Component } from '@angular/core';

import { MainPageComponent } from './main_page/main_page.component';
import { WelcomeComponent } from './welcome_parents/welcome.component';
import { HomeComponent } from './home_children/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lego';
}
