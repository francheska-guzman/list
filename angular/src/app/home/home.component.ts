import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTitle: string = 'Folk and Salsa Music';
  
  constructor() { }

  ngOnInit() {
  }

}

console.log("HomeComponent is working.");
