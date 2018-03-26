import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';


import { Tile } from '../shared/tile.model';
// import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(
                private httpClient: HttpClient,
                private authService: AuthService
              ) {
  }


  storeTile(tile: Tile) {
    const token = this.authService.getToken();
    return this.httpClient.post('/api/tile?', tile, {
      headers : new HttpHeaders().append('x-auth', token)
    });
  }

  updateTileOnDB(_id: string, tile: Tile) {
    const token = this.authService.getToken();
    return this.httpClient.patch('/api/tile/' + _id, tile, {
      headers : new HttpHeaders().append('x-auth', token)
    });
  }

  getTilesListData() {
    const token = this.authService.getToken();
    return this.httpClient.get<Tile[]>('/api/tileslist?' , {
      headers : new HttpHeaders().append('x-auth', token)
    });
  }

}
