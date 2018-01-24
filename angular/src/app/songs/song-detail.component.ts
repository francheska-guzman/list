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
  		"songName": "Test"
  	}
  }

  // We use _router
  onBack(): void {
  	this._router.navigate(['/songs']);
  }


}
