import { NgModule } from '@angular/core';

// Imports
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// Declarations
import { SongListComponent } from './song-list.component';
import { SongDetailComponent } from './song-detail.component';
import { ConvertToArrowPipe } from '../shared/convert-to-arrow.pipe';

// Providers
import { SongService } from './song.service';
import { SongGuardService } from './song-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'songs', component: SongListComponent },
      { path: 'songs/:id',
        canActivate: [ SongGuardService ],
        component: SongDetailComponent },
        // :id is to render SongDetailComponent.
        // The SongGuardService prevents navigation if ID is not valid (i.e. not a number).
    ]),
    SharedModule
  ],
  declarations: [
    SongListComponent,
    SongDetailComponent,
    ConvertToArrowPipe
  ],
  providers: [
    SongService,
    SongGuardService
  ]
})
export class SongModule { }
