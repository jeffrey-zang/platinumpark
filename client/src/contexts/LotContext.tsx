import React, { createContext } from 'react';
import { LotType, LotContextType } from '../types/lots';

export const LotContext = createContext<LotContextType>({
  lots: [], 
  setLots: () => {}, 
  addLot: () => {}, 
  updateLot: () => {}, 
})

export const LotContextProvider: React.FC<{children: React.ReactNode|React.ReactNode[]}> = ({children}) => {
  const [lots, setLots] = React.useState<LotType[]>([
    {
      title: 'Laurel Heights Secondary School',
      address: '650 Laurelwood Drive',
      spots: [
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0],
        [0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0],
        [0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0],
        [0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,9,0,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,10],
        [0,0,0,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,1],
      ],
      image: 'https://i.cbc.ca/1.6057754.1645809488!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/sir-john-a-macdonald-secondary-school-waterloo.JPG',
      price: 3,
      open: "8:00am - 4:00pm",
      description: "A spacious, well-lit parking lot with plenty of space for parking. The lot is open from 8:00am to 4:00pm on weekdays.",
      reviews: [
        {
          rating: 5,
          title: "This lot is great, I love it!",
          description: "I park here every day and it's the best!"
        },
        {
          rating: 4,
          title: "This lot is ok",
          description: "Too many children running around all the time"
        },
        {
          rating: 1,
          title: "This lot sucks",
          description: "I hate it"
        }
      ]
    }, 
  ])

  const addLot = (lot: LotType) => {
    setLots([...lots, lot])
  }

  const updateLot = (id: number, lot: LotType) => {
    setLots(lots.map((l, i) => i === id ? lot : l))
  }

  return (
      <LotContext.Provider value={{lots, setLots, addLot, updateLot}}>{children}</LotContext.Provider>
  )
}