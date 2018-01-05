import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['./list-of-songs.component.css']
})
export class ListOfSongsComponent implements OnInit {
  pageTitle: string = 'List of Songs';
  
  constructor() { 
  }

  ngOnInit() {
  }

}

console.log("ListOfSongsComponent is working.");
