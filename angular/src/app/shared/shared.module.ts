import { NgModule } from '@angular/core';

// Imports and Exports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Declarations
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
