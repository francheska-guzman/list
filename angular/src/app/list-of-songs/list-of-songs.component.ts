import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['./list-of-songs.component.css']
})
export class ListOfSongsComponent implements OnInit {
  pageTitle: string = 'List of Songs';
  // In typescript "any" is a data type.
  songs: any[] = [{
      "songId": 1,
      "songName": "La Fiesta de Pilito",
      "time": "3:55",
      "artist": "El Gran Combo de Puerto Rico",
      "album": "Nuestra Música",
      "genre": "Salsa",
      "starRating": 4.2,
      "imageUrl": "https://i.scdn.co/image/404f1635238ba205e075539a174482ef432e4269"
    },
    {
      "songId": 2,
      "songName": "Olé Maja",
      "time": "3:19",
      "artist": "Quique Domenech",
      "album": "Lo Mejor de Quique Domenech",
      "genre": "Folk",
      "starRating": 5.0,
    }
  ];
  constructor() { 
  }

  ngOnInit() {
  }

}

console.log("ListOfSongsComponent is working.");
