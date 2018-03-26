import { Directive, OnInit, OnDestroy, Renderer2, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TileSelectService } from '../services/tile-select.service';
import { Tile } from '../shared/tile.model';

@Directive({
  selector: '[appDisplaySelectedTile]'
})
export class DisplaySelectedTileDirective implements OnInit, OnDestroy {

  selectedTile: Tile;
  rotatedByClass: string;
  spanHeight: number;
  spanWidth: number;
  transform_origin: string;
  tilesFolderPath = '';

  tileChangedSubscription: Subscription;

  constructor(private elRef: ElementRef,
                private renderer: Renderer2,
                private tileService: TileSelectService ) { }

  ngOnInit() {
    this.selectedTile = this.tileService.getSelectedTile();
    this.tilesFolderPath = this.tileService.tilesFolderPath;
    this.tileChangedSubscription = this.tileService.selectedTileChanged
      .subscribe(
        (tileUpdate: {tile: Tile, rotatedByClass: string}) => {
          this.selectedTile = tileUpdate.tile;
          this.rotatedByClass = tileUpdate.rotatedByClass;
        }
      );
  }

  // set the background for tile
  @HostListener('click') changeTile() {
    this.spanHeight = this.elRef.nativeElement.clientHeight;
    this.spanWidth = this.elRef.nativeElement.clientWidth;

    if (this.selectedTile) {
      this.renderer.setAttribute(this.elRef.nativeElement.children[0], 'src', this.tilesFolderPath + this.selectedTile.path);
      this.renderer.setStyle(this.elRef.nativeElement.children[0], 'transform', 'rotate(' + this.rotatedByClass + ')');
      this.setTranformOriginStyle(this.elRef.nativeElement.children[0], this.spanWidth, this.spanHeight);

    }
  }

  // set the background for complete row
  @HostListener('dblclick') changeTiles() {
    if (this.selectedTile) {

      const tilesInRow: NodeListOf<HTMLImageElement> = (<HTMLElement>this.renderer
                              .parentNode(this.elRef.nativeElement)).querySelectorAll('img');
      for (let   i = 0; i < tilesInRow.length; i++) {
        tilesInRow[i].setAttribute('src', this.tilesFolderPath + this.selectedTile.path);
        tilesInRow[i].style.transform = 'rotate(' + this.rotatedByClass + ')';
        this.setTranformOriginStyle(tilesInRow[i], this.spanWidth, this.spanHeight);
      }
    }
  }

  setTranformOriginStyle(imgElement: any, width: number, height: number) {
    if (this.rotatedByClass === '0deg' || this.rotatedByClass === '180deg') {

      this.renderer.removeStyle(imgElement, 'transform-origin');

    } else if (this.rotatedByClass === '90deg') {

      this.transform_origin = width / 2 + 'px ' + width / 2 + 'px';
      this.renderer.setStyle(imgElement, 'transform-origin', this.transform_origin);

    } else if (this.rotatedByClass === '270deg') {

      this.transform_origin = height / 2 + 'px ' + height / 2 + 'px';
      this.renderer.setStyle(imgElement, 'transform-origin', this.transform_origin);

    }


  }

  ngOnDestroy() {
    this.tileChangedSubscription.unsubscribe();
  }

}
