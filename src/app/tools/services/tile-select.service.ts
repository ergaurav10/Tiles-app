import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Tile } from '../shared/tile.model';
import { TileSize } from '../shared/tile-size.model';
import { TileSizeService } from './tile-size.service';
import { DataStorageService } from './data-storage.service';
import { Response } from '@angular/http';


@Injectable()
export class TileSelectService  {

  // For informing the change in elected tile to others
  selectedTileChanged = new Subject<{tile: Tile, rotatedByClass: string}>();
  private tiles: Tile[] = [
      // new Tile('1', 'image1_24X24', 12, 18, 'Gaurav/Learning/Tiles_Application/tiles-app-angular5/images/image1_24X24.jpg', '123'),
        // new Tile('1', 'image1_24X24', 24, 24, 'test123-1517512691409.jpg', '123'),
        // new Tile('1', 'image1_24X24', 24, 24, 'image1_24X24.jpg', '123', '1234', 'No'),
        // new Tile('2', 'image2_24X24', 24, 24, 'image2_24X24'  + '.jpg', '123'),
        // new Tile('3', 'image3_24X24', 24, 24,  'image3_24X24'  + '.jpg', '123'),
        // new Tile('4', 'image4_24X24', 24, 24,  'image4_24X24'  + '.jpg', '123'),
    ];

  private selectedTile: Tile;
  private selectedTiles: Tile[];
  public tilesFolderPath =  '../../../../assets/uploads/';

  constructor (private tileSizeService: TileSizeService,
                private dataService: DataStorageService) {
              }


  // Get full list of available tiles
  getAvailableTiles() {
    return this.tiles.slice();
  }

  // Reset full list of available tiles
  resetTilesList() {
    this.tiles = [];
  }

  //  Get availabele tiles list based on size
  getTilesBySize(width: number , height: number) {
    this.selectedTiles = this.tiles.filter((tile: Tile) => {
      if (tile.width === width && tile.height === height) {
        return tile;
      }
    }).slice();
    return this.selectedTiles;
  }

  // Set the currently selected tile and emit the change to inform others
  setSelectedTile(tileSelected: Tile, classRotate: string = '0deg') {
    this.selectedTile = tileSelected;
    this.selectedTileChanged.next({tile: this.selectedTile, rotatedByClass: classRotate});

  }

  // Get the currently selected tile
  getSelectedTile() {
    return this.selectedTile;
  }

  //  Get tiles by ID
  getTileByID ( _id: string) {
    return this.tiles.find((tile) => {
      return tile._id === _id;
    });
  }


  fetchTilesListFromDatabase() {
    this.dataService.getTilesListData()
    .subscribe(
      (tilesList) => {
        this.tiles = tilesList;
      }
    );

  }
  // Create a Tile Object for Saving and updating tile
  createTileObject(tileDetails: { _id: string,
                        name: string,
                        size: string,
                        description: string,
                        availability: string,
                        path: string,
                        _userid: string }) {
    const tilesize: TileSize = this.tileSizeService.getTilesSizeById(+tileDetails.size);
    const tile: Tile = new Tile( tileDetails._id,
                                  tileDetails.name,
                                  tilesize.width,
                                  tilesize.height,
                                  tileDetails.path,
                                  tileDetails._userid,
                                  tileDetails.description,
                                  tileDetails.availability
                                );
    return tile;
  }

  // Add New tile details
  addTile(tileDetails: { _id: string,
                        name: string,
                        size: string,
                        description: string,
                        availability: string,
                        path: string,
                        _userid: string }) {
    const tile: Tile = this.createTileObject(tileDetails);
    //  Published the changes
    this.dataService.storeTile(tile)
      .subscribe(
        (tile1: Tile) => {
          console.log(tile1);
          // Add the new Tile in the list
          this.tiles.push(tile1);
          console.log(this.tiles);
        }
      );
  }

  updateTile(_id: string, tileDetails: { _id: string,
                        name: string,
                        size: string,
                        description: string,
                        availability: string,
                        path: string,
                        _userid: string }) {
    const tile: Tile = this.createTileObject(tileDetails);
    const index: number =  this.tiles.findIndex((this_tile: Tile) => {
                              return this_tile._id === _id;
                            });
    // Updated the new Tile in the list
    this.tiles[index] = tile;

    this.dataService.updateTileOnDB(_id, tile)
      .subscribe(
        (updatedTile: {tile: Tile}) => {
          console.log('updateTileOnDB', updatedTile);
          this.tiles[index] = updatedTile.tile;
          // Update the Tile in the list
          console.log(this.tiles);
        }
      );
    // //  Published the changes
  }

}
