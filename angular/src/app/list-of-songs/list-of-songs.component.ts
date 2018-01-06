import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['./list-of-songs.component.css']
})
export class ListOfSongsComponent implements OnInit {
  pageTitle: string = 'List of Songs';
  // In typescript "any" is a data type.
  songs: any[] = [
    {
        "songId": 1,
        "songName": "La Fiesta de Pilito",
        "time": "3:55",
        "artist": "El Gran Combo de Puerto Rico",
        "album": "Nuestra Música",
        "genre": "Salsa",
        "starRating": 4.5,
        "imageUrl": "https://i.scdn.co/image/404f1635238ba205e075539a174482ef432e4269"
    },
    {
        "songId": 2,
        "songName": "Olé Maja",
        "time": "4:46",
        "artist": "Quique Domenech",
        "album": "Lo Mejor de Quique Domenech",
        "genre": "Folk",
        "starRating": 4.9,
        "imageUrl": "https://i.scdn.co/image/3c3fa25c32e690e9f23f53c2d1ccef500398af71"
    },
    {
        "songId": 3,
        "songName": "Fuego en el 23",
        "time": "5:55",
        "artist": "La Sonora Ponceña",
        "album": "Fuego En El 23",
        "genre": "Salsa",
        "starRating": 3.9,
        "imageUrl": "https://i.scdn.co/image/bb04ba14771bcb7b9b3b8d9272dbcf3edd451c63"
    },
    {
        "songId": 4,
        "songName": "Y no hago más na'",
        "time": "4:58",
        "artist": "El Gran Combo de Puerto Rico",
        "album": "La Universidad de la Salsa",
        "genre": "Salsa",
        "starRating": 4.8,
        "imageUrl": "https://i.scdn.co/image/bd133f28a29442e2b420ca2fae2dca49abf24349"
    },
    {
        "songId": 5,
        "songName": "Brujería",
        "time": "3:24",
        "artist": "El Gran Combo de Puerto Rico",
        "album": "Aqui No Se Sienta Nadie",
        "genre": "Salsa",
        "starRating": 4.6,
        "imageUrl": "https://i.scdn.co/image/58433db130f8450f1e5ecd60a2b91aa062ff25bd"
    },
    {
        "songId": 6,
        "songName": "Así es mi Tierra",
        "time": "4:23",
        "artist": "Los Hispanos",
        "album": "15 Éxitos Navideños",
        "genre": "Folk",
        "starRating": 4.7,
        "imageUrl": "https://i.scdn.co/image/583eb7f7dacf70ca033f076228fe1021bebeee8a"
    },
  ];
  constructor() { 
  }

  ngOnInit() {
  }

}

console.log("ListOfSongsComponent is working.");
