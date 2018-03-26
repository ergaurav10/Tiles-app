import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TileSelectService } from '../services/tile-select.service';
import { TileSizeService } from '../services/tile-size.service';
import { TileSize } from '../shared/tile-size.model';


@Component({
  selector: 'app-tile-size',
  templateUrl: './tile-size.component.html',
  styleUrls: ['./tile-size.component.css']
})
export class TileSizeComponent implements OnInit {

  tileSizes: TileSize[];
  constructor(private route: ActivatedRoute,
      private router: Router,
      private tileService: TileSelectService,
      private tileSizeService: TileSizeService) { }

  ngOnInit() {
    this.tileSizes = this.tileSizeService.getTilesSize();
  }

  resetSelectedTile() {
    this.tileService.setSelectedTile(null);
  }



}
