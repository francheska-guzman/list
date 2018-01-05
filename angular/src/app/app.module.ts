import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfSongsComponent } from './list-of-songs/list-of-songs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfSongsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
