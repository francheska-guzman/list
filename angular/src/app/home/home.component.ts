import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h2>{{homeTitle}}</h2>`,
  styleUrls: ['../app.component.css', './home.component.css']
})
export class HomeComponent {
  homeTitle: string = 'Folk and Salsa Music';
  
  constructor() { }

  ngOnInit() {
  }

}

// console.log("HomeComponent is working.");
