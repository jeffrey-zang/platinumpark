import React from 'react'
import { TileValues } from '../../types/lots'

const TileEditor = ({ tiles, setTiles }: {tiles: TileValues[][], setTiles?: Function}) => {
  
  return (
    <div>
      { tiles.map(row => {
        return row.map(tile => {
          return <div></div>
        })
      }) }
    </div>
  )
}

export default TileEditor