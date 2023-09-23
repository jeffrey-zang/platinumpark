enum Tile {
  Empty,
  Line,
  Spot,
  LotEntrance,
  BuildingEntrance
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
