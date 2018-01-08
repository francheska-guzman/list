import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['../../app.component.css', './star.component.css']
})
export class StarComponent implements OnChanges {
  // The Input decorator is a function, thats why the ().
  @Input() rating: number;
  starWidth: number;

  // Output decorator (is a function).
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    console.log(`The rating ${this.rating} was clicked!`);
  }
}
