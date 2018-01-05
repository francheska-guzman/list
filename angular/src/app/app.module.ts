import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListOfSongsComponent } from './list-of-songs/list-of-songs.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfSongsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
