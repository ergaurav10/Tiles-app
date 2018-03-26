import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../tools/shared/shared.module';
import { AppRoutingModule } from '../app.routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


import { TileSelectService } from '../tools/services/tile-select.service';
import { TileSizeService } from '../tools/services/tile-size.service';
import { DataStorageService } from '../tools/services/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent
  ],
  providers: [
    TileSelectService,
    TileSizeService,
    DataStorageService,
    AuthService,
  ]
})
export class CoreModule { }
