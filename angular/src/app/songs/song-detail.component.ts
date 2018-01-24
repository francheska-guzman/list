import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISong } from './song';

// I need to import Router to add a "back" button.
import { Router } from '@angular/router';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['../app.component.css', './song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  pageTitle: string = 'Song Detail';
  song: ISong;

  constructor(private _route: ActivatedRoute, 
  			  private _router: Router) { 
  	// console.log(this._route.snapshot.paramMap.get('id'));
  }

  // We use _route
  ngOnInit() {
  	// The plus + is a JS shortcut to convert the parameter string to numeric.
  	let id = +this._route.snapshot.paramMap.get('id');
  	this.song = {
  		"songId": id,
        "songName": "La Fiesta de Pilito",
        "time": "3:55",
        "artist": "El Gran Combo de Puerto Rico",
        "album": "Nuestra Música",
        "releaseDate": 1985,
        "genre": "Salsa",
        "starRating": 4.5,
        "imageUrl": "https://i.scdn.co/image/404f1635238ba205e075539a174482ef432e4269",
        "songUrl": " ",
        "songLyrics": " "
  	}
  }

  // We use _router
  onBack(): void {
  	this._router.navigate(['/songs']);
  }


}
