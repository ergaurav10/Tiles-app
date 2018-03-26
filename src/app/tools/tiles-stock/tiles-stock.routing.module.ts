import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { TileSizeComponent } from '../tile-size/tile-size.component';
import { TilesStockComponent } from './tiles-stock.component';


const tilesStockRoute: Routes = [
  { path: '', component: TilesStockComponent , pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(tilesStockRoute)
  ],
  declarations: [],
  providers: [],
  exports: [ RouterModule ]
})
export class TilesStockRoutingModule { }
