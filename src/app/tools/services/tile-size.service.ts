import { TileSize } from '../shared/tile-size.model';

export class TileSizeService  {

  private wallWidth = 600;
  private wallHeight = 600;
  private tileSizes: TileSize[] = [
    new TileSize ('24 X 24', 24,  24),
    new TileSize ('12 X 18', 12,  18),
    new TileSize ('18 X 12', 18,  12),
    new TileSize ('12 X 12', 12,  12),
    new TileSize ('10 X 15', 10,  15),
    new TileSize ('10 X 13', 10,  13),
    new TileSize ('12 X 8', 12,  8),
  ];

  constructor () { }

  // Get full list of available tiles size
  getTilesSize() {
    return this.tileSizes.slice();
  }

  //  Get availabele tiles size by ID
  getTilesSizeById(id: number) {
    return this.tileSizes[id];
  }

  //  Get tiles size Index by Dimension
  getSizeIndexByDimension ( width: number, height: number) {
    return this.tileSizes.findIndex((size) => {
      return size.height === height && size.width === width;
    });
  }

  // Get Wall  size
  getWallSize() {
    return {'wallWidth': this.wallWidth, 'wallHeight' : this.wallHeight};
  }
  // Set Wall size
  setWallSize(wallWidth: number, wallHeight: number) {
    this.wallWidth = wallWidth * 60;
    this.wallHeight = wallHeight * 60;
  }

  getRowWidth(originalWidth: number) {
    return (originalWidth * 5);
  }

  getRowHeight(originalHeight: number) {
    return (originalHeight * 5);
  }

  getRowCount(originalHeight: number) {
    return  (this.wallHeight / (this.getRowHeight(originalHeight)));
  }

  getColumnCount(originalWidth: number) {
    return  (this.wallWidth / (this.getRowWidth(originalWidth)));
  }
}
