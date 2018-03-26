import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { TileSelectService } from '../../services/tile-select.service';
import { Tile } from '../../shared/tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() tile: Tile;
  tilesFolderPath = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tileService: TileSelectService) { }

  ngOnInit() {
    this.tilesFolderPath = this.tileService.tilesFolderPath;
  }

  setSelectedTile(classRotate: string) {
    this.tileService.setSelectedTile(this.tile, classRotate);
  }

  setTileInWall() {
      this.setSelectedTile('0deg');
      this.router.navigate(['/tiles/walldisplay', this.tile.width, this.tile.height]);
  }

  editTile() {
      this.router.navigate(['/edittile', this.tile._id]);
  }

}
