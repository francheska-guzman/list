import { Component, OnInit } from '@angular/core';

import { ISong } from './song';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['../app.component.css', './song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  pageTitle: string = 'Song Detail';
  song: ISong;

  constructor() { }

  ngOnInit() {
  }

}
