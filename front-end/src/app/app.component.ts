// We need to 'import' { the Component decorator } from 'the Angular library module'.
import { Component } from '@angular/core';

// Component decorator.
@Component({
  // This is an object (Property: Value).
  selector: 'app-root', // Directive name used in HTML.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// The 'export' keyboard is used so other components can use this class.
export class AppComponent {
  pageTitle: string = 'Rhythm';
}

// console.log('AppComponent is working.');
