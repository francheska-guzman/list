import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfSongsComponent } from './list-of-songs/list-of-songs.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfSongsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
