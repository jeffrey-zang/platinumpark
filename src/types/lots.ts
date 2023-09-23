export enum TileType {
  Empty,
  Blocked,
  Spot,
  LotEntrance,
  BuildingEntrance
}

export let edgesEnum = {
  none: [false, false, false, false],
  top: [false, true, true, true],
  right: [true, false, true, true],
  bottom: [true, true, false, true],
  left: [true, true, true, false],
}

export interface Tile {
  type: TileType,
  edges: boolean[]
}

export interface LotType {
  title: string;
  address: string;
  spots: Tile[][];
  price: number;
  image: string;
  open: string;
  reviews: ReviewType[];
}

export interface ReviewType {
  rating: number;
  title: string;
  description: string;
}

export interface LotContextType {
  lots: LotType[],
  setLots: React.Dispatch<React.SetStateAction<LotType[]>>,
  addLot: (lot: LotType) => void,
}
