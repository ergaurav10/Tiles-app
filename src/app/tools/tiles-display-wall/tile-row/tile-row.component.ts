import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { TileSizeService } from '../../services/tile-size.service';
import { TileSelectService } from '../../services/tile-select.service';

@Component({
  selector: 'app-tile-row',
  templateUrl: './tile-row.component.html',
  styleUrls: ['./tile-row.component.css']
})
export class TileRowComponent implements OnInit {

  @Input() originalWidth: number;
  @Input() originalHeight: number;
  @Input() imageAddress: string;
  tilesFolderPath = '';
  width: number;
  height: number;
  colCount: number;
  isToggled = false;
  widthp: number ;
  heightp: number;


  constructor(private tileSizeService: TileSizeService,
              private tileService: TileSelectService,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.colCount = this.tileSizeService.getColumnCount(this.originalWidth);
    this.width = this.tileSizeService.getRowWidth(this.originalWidth);
    this.height = this.tileSizeService.getRowHeight(this.originalHeight);
    this.tilesFolderPath = this.tileService.tilesFolderPath;
  }

  toggleCell() {
    this.isToggled = !this.isToggled;
    const tempSize = this.width;
    this.width = this.height;
    this.height = tempSize;
    if (this.isToggled) {
      this.colCount = this.tileSizeService.getColumnCount(this.originalHeight);
      this.widthp = this.height;
      this.heightp = this.width;
    } else {
      this.colCount = this.tileSizeService.getColumnCount(this.originalWidth);
      this.widthp = this.width;
      this.heightp = this.height;
    }
  }

  fillRow(event: Event) {
    const tilesInRow: NodeListOf<HTMLImageElement> = (<HTMLElement>this.renderer
                            .parentNode(this.renderer.parentNode(event.srcElement))).querySelectorAll('img');

    for (let   i = 0; i < tilesInRow.length; i++) {
      tilesInRow[i].click();
    }
  }

}
