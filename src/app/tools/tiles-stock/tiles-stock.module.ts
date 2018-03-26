import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesStockRoutingModule } from './tiles-stock.routing.module';

import { TilesStockComponent } from './tiles-stock.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    TilesStockRoutingModule,
  ],
  declarations: [
    TilesStockComponent,
    TileComponent
  ],
  providers: []
})
export class TileStockModule { }
