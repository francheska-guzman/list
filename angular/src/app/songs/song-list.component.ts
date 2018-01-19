// OnInit is one of the Component Lifecycle Hooks.
import { Component, OnInit } from '@angular/core';

// Data type.
import { ISong } from './song';
// Service.
import { SongService } from './song.service';

@Component({
  templateUrl: './song-list.component.html',
  styleUrls: ['../app.component.css', './song-list.component.css']
})

  // Pipes transform bound properties before display.
  // Transform dates, numbers, lowercase, etc.

export class SongListComponent implements OnInit {
  pageTitle: string = 'Folk and Salsa Music';
  showRating: string = '';
  // imageWidth: number = 100;
  // imageMargin: number = 2;
  // showImage: boolean = false;
  errorMessage: string;
  // In typescript 'any' is a data type.
  // Properties getter and setter.
  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  // To modify.
  set listFilter(value: string) {
      this._listFilter = value;
      // JavaScript conditional operator.
      this.filteredSongs = this.listFilter ? this.performFilter(this.listFilter) : this.songs;
  }

  filteredSongs: ISong[];
  songs: ISong[] = [];

// Short hand syntax to define a dependency.
// Injecting the service.
// private is the access keyboard.
  constructor(private _songService: SongService) {
      // this.listFilter = '';
  }

  onRatingClicked(message: string): void {
      this.showRating = `: ${message}`;
  }

  // Perform filter method is defined here:
  performFilter(filterBy: string): ISong[] {
    // Change all letters to lowercase to avoid case sensitive issues.
    filterBy = filterBy.toLocaleLowerCase();
    return this.songs.filter((song: ISong) =>
      song.songName.toLocaleLowerCase().indexOf(filterBy) !== -1) ;
  }

  // toggleImage(): void {
  //  this.showImage = !this.showImage;
  // }

  // <any>error is a casting operator.
  ngOnInit(): void {
    this._songService.getSongs()
        .subscribe(songs => {
          this.songs = songs;
          this.filteredSongs = this.songs;
        },
          error => this.errorMessage = <any>error);
    // console.log('ListOfSongsComponent is working.');
  }

}
