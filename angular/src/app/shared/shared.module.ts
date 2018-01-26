import { NgModule } from '@angular/core';

// Imports and Exports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Declarations
import { StarComponent } from './star.component';
import { ConvertToArrowPipe } from './convert-to-arrow.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToArrowPipe
  ],
  exports: [
    StarComponent,
    ConvertToArrowPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
