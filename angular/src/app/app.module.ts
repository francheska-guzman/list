import { BrowserModule } from '@angular/platform-browser';
// We import { FormsModule } to be able to use, for i.e. the directive [(ngModel)] used in SongListComponent.
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Importing components.
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongListComponent } from './songs/song-list.component';
import { SongDetailComponent } from './songs/song-detail.component';
import { FooterComponent } from './footer/footer.component';

import { ConvertToArrowPipe } from './shared/convert-to-arrow.pipe';
import { StarComponent } from './shared/star/star.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  // Directives components in pipes are declared in declarations array.
  declarations: [
    AppComponent,
    HomeComponent,
    SongListComponent,
    SongDetailComponent,
    FooterComponent,
    ConvertToArrowPipe,
    StarComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  // Directives from other sources (including Angular itself) and third parties are declared here:
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'songs', component: SongListComponent },
      { path: 'songs/:id', component: SongDetailComponent },
      // :id is to render SongDetailComponent.
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
