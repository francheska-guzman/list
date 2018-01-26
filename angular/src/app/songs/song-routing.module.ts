import { NgModule } from '@angular/core';

// Imports and Exports
import { RouterModule } from '@angular/router';
import { SongListComponent } from './song-list.component';
import { SongDetailComponent } from './song-detail.component';
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
    ])
  ],
  exports: [ RouterModule ]
})
export class SongRoutingModule { }
