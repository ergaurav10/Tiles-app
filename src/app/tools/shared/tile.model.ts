export class Tile {
  constructor(
                public _id: string,
                public name: string,
                public width: number,
                public height: number,
                public path: string,
                public _userid: string,
                public description: string = '',
                public availability: string = 'Yes'
              ) {}
}
