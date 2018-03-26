import { Component, OnInit, Input } from '@angular/core';
import { TileSelectService } from '../../services/tile-select.service';
import { Tile } from '../../shared/tile.model';

@Component({
  selector: 'app-tiles-panel',
  templateUrl: './tiles-panel.component.html',
  styleUrls: ['./tiles-panel.component.css']
})
export class TilesPanelComponent implements OnInit {

  @Input() tile: Tile;
  tilesFolderPath = '';

  constructor(private tileService: TileSelectService) { }

  ngOnInit() {
    this.tilesFolderPath = this.tileService.tilesFolderPath;
  }

  setSelectedTile(classRotate: string) {
    this.tileService.setSelectedTile(this.tile, classRotate);
  }

}
