// OnInit is one of the Component Lifecycle Hooks.
import { Component, OnInit } from '@angular/core';
import { StarComponent } from '../shared/star/star.component';
import { MoreInfoComponent } from '../more-info/more-info.component';

// Data type.
import { ISongs } from './songs';
// Service.
import { SongsService } from './songs.service';

@Component({
  selector: 'app-list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['../app.component.css', './list-of-songs.component.css']
})

  // Pipes transform bound properties before display.
  // Transform dates, numbers, lowercase, etc.

export class ListOfSongsComponent implements OnInit {
  pageTitle: string = 'Folk and Salsa Music';
  showRating: string = '';
  // imageWidth: number = 100;
  // imageMargin: number = 2;
  // showImage: boolean = false;
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

  filteredSongs: ISongs[];
  songs: ISongs[] = [];

// Short hand syntax to define a dependency.
// Injecting the service.
// private is the access keyboard.
  constructor(private _songsService: SongsService) {
      // this.listFilter = '';
  }

  onRatingClicked(message: string): void {
      this.showRating = `: ${message}`;
  }

  // Perform filter method is defined here:
  performFilter(filterBy: string): ISongs[] {
    // Change all letters to lowercase to avoid case sensitive issues.
    filterBy = filterBy.toLocaleLowerCase();
    return this.songs.filter((songs: ISongs) =>
      songs.songName.toLocaleLowerCase().indexOf(filterBy) !== -1) ;
  }

  // toggleImage(): void {
  //  this.showImage = !this.showImage;
  // }

  ngOnInit(): void {
    this.songs = this._songsService.getSongs();
    this.filteredSongs = this.songs;
    // console.log('ListOfSongsComponent is working.');
  }

}



