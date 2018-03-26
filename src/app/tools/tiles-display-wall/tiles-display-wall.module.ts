import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TilesDisplayWallComponent } from './tiles-display-wall.component';
import { TileRowComponent } from './tile-row/tile-row.component';
import { TilesPanelComponent } from './tiles-panel/tiles-panel.component';
import { SharedModule } from '../shared/shared.module';

import { TilesDisplayWallRoutingModule } from './tiles-display-wall.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    TilesDisplayWallRoutingModule
  ],
  declarations: [
    TilesDisplayWallComponent,
    TilesPanelComponent,
    TileRowComponent,
  ],
  providers: []
})
export class TilesDisplayWallModule { }
