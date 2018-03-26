import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { TileSelectService } from '../services/tile-select.service';
import { Tile } from '../shared/tile.model';

@Component({
  selector: 'app-tiles-stock',
  templateUrl: './tiles-stock.component.html',
  styleUrls: ['./tiles-stock.component.css']
})
export class TilesStockComponent implements OnInit {

  tiles: Tile[];
  originalWidth: number;
  originalHeight: number;

  constructor(private route: ActivatedRoute,
      private router: Router,
      private tileService: TileSelectService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // get the original tile size
      this.originalWidth = +params['width'];
      this.originalHeight = +params['height'];
      // get the tiles list based on size
      this.tiles = this.tileService.getTilesBySize(this.originalWidth, this.originalHeight);
    });
  }

}
