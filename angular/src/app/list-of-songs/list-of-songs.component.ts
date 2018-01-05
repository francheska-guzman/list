import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['./list-of-songs.component.css']
})
export class ListOfSongsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

console.log("ListOfSongsComponent is working.");
