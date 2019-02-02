import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from '../home_children/home.component';
import { WelcomeComponent } from '../welcome_parents/welcome.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main_page.component.html',
  styleUrls: ['./main_page.component.css']
})
export class MainPageComponent {

  constructor() { }

}
