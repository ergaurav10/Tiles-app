import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { TilesDisplayWallComponent } from './tiles-display-wall.component';

const tilesDisplayWallRoute: Routes = [
  { path: '', component: TilesDisplayWallComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    RouterModule.forChild(tilesDisplayWallRoute)
  ],
  declarations: [],
  providers: [],
  exports: [ RouterModule ]
})



export class TilesDisplayWallRoutingModule { }
