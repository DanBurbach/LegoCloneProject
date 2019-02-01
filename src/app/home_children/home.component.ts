// @angular imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';


// component imports
import { WelcomeComponent } from '../welcome_parents/welcome.component';
import { VideosComponent } from '../videos_children/videos.component';
import { GamesComponent } from '../games_children/games.component';
import { CharactersComponent } from '../characters_children/characters.component';
import { SetsComponent } from '../sets_children/sets.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
