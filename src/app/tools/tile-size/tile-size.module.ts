import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TileSizeComponent } from './tile-size.component';
import { EmptyWallMessageComponent } from '../empty-wall-message/empty-wall-message.component';

import { TileSizeRoutingModule } from './tile-size.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TileSizeRoutingModule
  ],
  declarations: [
    TileSizeComponent,
    EmptyWallMessageComponent
  ],
  providers: []
})
export class TileSizeModule { }
