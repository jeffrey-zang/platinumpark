import React, { createContext } from 'react';
import { LotType, LotContextType } from '../types/lots';

export const LotContext = createContext<LotContextType>({
  lots: [], 
  setLots: () => {}, 
  addLot: () => {}, 
})

export const LotContextProvider: React.FC<{children: React.ReactNode|React.ReactNode[]}> = ({children}) => {
  const [lots, setLots] = React.useState<LotType[]>([
    {
      title: 'LHSS Parking Lot',
      address: '650 Laurelwood Drive',
      spots: 36,
      image: 'https://i.cbc.ca/1.6057754.1645809488!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/sir-john-a-macdonald-secondary-school-waterloo.JPG',
      price: 3
    }  
  ])

  const addLot = (lot: LotType) => {
    setLots([...lots, lot])
  }

  return (
      <LotContext.Provider value={{lots, setLots, addLot}}>{children}</LotContext.Provider>
  )
}