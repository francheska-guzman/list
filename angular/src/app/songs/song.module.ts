import { NgModule } from '@angular/core';

// Imports
import { SharedModule } from '../shared/shared.module';
import { SongRoutingModule } from './song-routing.module';

// Declarations
import { SongListComponent } from './song-list.component';
import { SongDetailComponent } from './song-detail.component';

// Providers
import { SongService } from './song.service';
import { SongGuardService } from './song-guard.service';

@NgModule({
  imports: [
    SharedModule,
    SongRoutingModule
  ],
  declarations: [
    SongListComponent,
    SongDetailComponent
  ],
  providers: [
    SongService,
    SongGuardService
  ]
})
export class SongModule { }
