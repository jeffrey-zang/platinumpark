export interface LotType {
  title: string;
  address: string;
  spots: number;
  price: number;
  image: string;
}

export interface LotContextType {
  lots: LotType[],
  setLots: React.Dispatch<React.SetStateAction<LotType[]>>,
  addLot: (lot: LotType) => void,
}
