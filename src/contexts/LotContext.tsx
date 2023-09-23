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
      title: 'Laurel Heights Secondary School',
      address: '650 Laurelwood Drive',
      //65x13
      spots: [
        []
      ],
      image: 'https://i.cbc.ca/1.6057754.1645809488!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/sir-john-a-macdonald-secondary-school-waterloo.JPG',
      price: 3,
      open: "8:00am - 4:00pm",
      reviews: [
        {
          rating: 5,
          title: "This lot is great, I love it!",
          description: "I park here every day and it's the best!"
        },
        {
          rating: 4,
          title: "This lot is great, I love it!",
          description: "I park here every day and it's the best!"
        }
      ]
    }, 
  ])

  const addLot = (lot: LotType) => {
    setLots([...lots, lot])
  }

  return (
      <LotContext.Provider value={{lots, setLots, addLot}}>{children}</LotContext.Provider>
  )
}