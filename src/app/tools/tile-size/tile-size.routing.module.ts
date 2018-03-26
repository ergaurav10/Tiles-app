import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TileSizeComponent } from './tile-size.component';
import { EmptyWallMessageComponent } from '../empty-wall-message/empty-wall-message.component';

import { TileStockModule } from '../tiles-stock/tiles-stock.module';
import { TilesDisplayWallModule } from '../tiles-display-wall/tiles-display-wall.module';

import { TilesDisplayWallComponent } from '../tiles-display-wall/tiles-display-wall.component';
import { AuthGuard } from '../../auth/auth-guard.service';

const tilesSizeRoute: Routes = [
  { path: 'tilesstock', component: TileSizeComponent, children: [
      { path: '', component: EmptyWallMessageComponent, pathMatch: 'full' },
      {
        path: ':width/:height',
        loadChildren: '../tiles-stock/tiles-stock.module#TileStockModule',
        canActivate: [AuthGuard]
      },
    ]
  },
  { path: 'walldisplay', component: TileSizeComponent, children: [
      { path: '', component: EmptyWallMessageComponent, pathMatch: 'full' },
      {
        path: ':width/:height',
        loadChildren: '../tiles-display-wall/tiles-display-wall.module#TilesDisplayWallModule',
        canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(tilesSizeRoute)
  ],
  declarations: [],
  providers: [],
  exports: [ RouterModule ]
})
export class TileSizeRoutingModule { }
