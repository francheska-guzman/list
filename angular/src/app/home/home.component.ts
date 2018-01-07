import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>{{pageTitle}}</h1> 
    <!-- Data binding (interpolation). 
    "pageTitle" is a template expression. -->`,
  styleUrls: ['../app.component.css', './home.component.css']
})
export class HomeComponent {
  // Name that we will be using for binding, type and default value.
  pageTitle: string = 'Rhythm';
  
  constructor() { }

  ngOnInit() {
  }

}

// console.log("HomeComponent is working.");
