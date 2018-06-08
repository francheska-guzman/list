import { Component } from '@angular/core';

@Component({
  template: `
    <h2>{{ pageTitle }}</h2>
    <!-- Data binding (interpolation).
    'pageTitle' is a template expression. -->
    <div id='homepage'></div>`,
  styleUrls: ['../app.component.css', './home.component.css']
})
export class HomeComponent {
  // Name that we will be using for binding, type and default value.
  pageTitle: string = 'Home';

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

}

// console.log('HomeComponent is working.');
