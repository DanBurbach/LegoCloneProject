import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, RouterModule } from '@angular/router';

import { MainPageComponent } from './main_page/main_page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lego';
}
