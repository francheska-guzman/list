import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['../../app.component.css', './star.component.css']
})
export class StarComponent implements OnChanges {
  // The Input decorator is a function, thats why the ().
  @Input() rating: number;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }
}
