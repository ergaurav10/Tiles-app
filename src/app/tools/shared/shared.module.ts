import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumToArrayPipe } from './num-to-array.pipe';
import { DisplaySelectedTileDirective } from './display-selected-tile.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NumToArrayPipe,
    DisplaySelectedTileDirective
  ],
  providers: [],
  exports: [
    NumToArrayPipe,
    DisplaySelectedTileDirective
  ]
})
export class SharedModule { }
