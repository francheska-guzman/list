import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// I need to import Router to add a "back" button.
import { ISong } from './song';
import { SongService } from './song.service';

@Component({
  templateUrl: './song-detail.component.html',
  styleUrls: ['../app.component.css', './song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  pageTitle: string = 'Song Detail';
  song: ISong;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _songService: SongService) { /* console.log(this._route.snapshot.paramMap.get('id')); */ }

  // We use _route
  ngOnInit() {
  // The plus + is a JS shortcut to convert the parameter string to numeric.
  const param = +this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getSong(id);
    }
  }

  getSong(id: number) {
    this._songService.getSong(id).subscribe (
      song => this.song = song,
      error => this.errorMessage = <any>error);
  }

  // We use _router
  onBack(): void {
    this._router.navigate(['/songs']);
  }

}
