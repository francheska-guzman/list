import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SongModule } from './songs/song.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // Directives components in pipes are declared in declarations array.
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  // Directives from other sources (including Angular itself) and third parties are declared here:
  imports: [
    BrowserModule,
    HttpClientModule,
    SongModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
