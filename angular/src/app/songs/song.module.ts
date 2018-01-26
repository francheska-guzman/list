// Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Declarations
import { SongListComponent } from './song-list.component';
import { SongDetailComponent } from './song-detail.component';
import { ConvertToArrowPipe } from '../shared/convert-to-arrow.pipe';
import { StarComponent } from '../shared/star/star.component';

// Providers
import { SongService } from './song.service';
import { SongGuardService } from './song-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'songs', component: SongListComponent },
      { path: 'songs/:id',
        canActivate: [ SongGuardService ],
        component: SongDetailComponent },
        // :id is to render SongDetailComponent.
        // The SongGuardService prevents navigation if ID is not valid (i.e. not a number).
    ])
  ],
  declarations: [
    SongListComponent,
    SongDetailComponent,
    ConvertToArrowPipe,
    StarComponent
  ],
  providers: [
    SongService,
    SongGuardService
  ]
})
export class SongModule { }
