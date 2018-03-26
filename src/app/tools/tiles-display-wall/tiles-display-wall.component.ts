import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TileSizeService } from '../services/tile-size.service';
import { TileSelectService } from '../services/tile-select.service';
import { Tile } from '../shared/tile.model';

@Component({
  selector: 'app-tiles-display-wall',
  templateUrl: './tiles-display-wall.component.html',
  styleUrls: ['./tiles-display-wall.component.css']
})
export class TilesDisplayWallComponent implements OnInit {

  originalWidth: number;
  originalHeight: number;
  rowCount: number;
  colCount: number;
  imageAddress: string;
  tiles: Tile[];

  wallSizeForm: FormGroup;



  constructor(private route: ActivatedRoute,
      private router: Router,
      private tileService: TileSelectService,
      private tileSizeService: TileSizeService) {
                // override the route reuse strategy to reload the component on every time when parameter change.
                // Used this to to recreate html template on every load
                  this.router.routeReuseStrategy.shouldReuseRoute = function() {
                      return false;
                  };
                  this.router.onSameUrlNavigation = 'reload';
               }

  ngOnInit() {

    this.inItWallSizeForm();
    this.tiles = this.tileService.getAvailableTiles();
    this.getParams();

  }

  inItWallSizeForm() {
    const wallSize = this.tileSizeService.getWallSize();
    const wallWidth = wallSize.wallWidth / 60;
    const wallHeight = wallSize.wallHeight / 60;

    this.wallSizeForm = new FormGroup({
      'wallWidth': new FormControl(wallWidth, Validators.required),
      'wallHeight': new FormControl(wallHeight, Validators.required),
    });
  }

  getParams() {
    this.route.params.subscribe((params: Params) => {
      // get the original tile size
      this.originalWidth = +params['width'];
      this.originalHeight = +params['height'];

      // get the number of row and column count
      this.rowCount = this.tileSizeService.getRowCount(this.originalHeight);

      // get the tiles list based on size
      this.tiles = this.tileService.getTilesBySize(this.originalWidth, this.originalHeight);

      const selectedTilesFromStock: Tile = this.tileService.getSelectedTile();
      if (selectedTilesFromStock) {
        this.setDefaultTilesOnWall();
      }
    });
  }

  setDefaultTilesOnWall() {
    this.imageAddress =  this.tileService.getSelectedTile().path;
  }

  onSubmit() {
    this.tileSizeService.setWallSize(this.wallSizeForm.value.wallWidth, this.wallSizeForm.value.wallHeight);

    this.tileService.setSelectedTile(null);
    this.router.navigate(['./'], {relativeTo: this.route});
  }

}
