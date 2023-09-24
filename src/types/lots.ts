export enum Tile {
  Empty,
  Blocked,
  SpotTop,
  SpotRight,
  SpotBottom,
  SpotLeft,
  SpotX,
  SpotY,
  Spot,
  LotEntrance,
  BuildingEntrance
}

export type TileValues = `${Tile}`

export interface LotType {
  title: string;
  address: string;
  spots: Tile[][];
  price: number;
  description: string;
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
  updateLot: (id: number, lot: LotType) => void,
}
