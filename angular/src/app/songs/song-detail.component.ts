import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISong } from './song';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['../app.component.css', './song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  pageTitle: string = 'Song Detail';
  song: ISong;

  constructor(private _route: ActivatedRoute) { 
  	console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
