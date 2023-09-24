import React from 'react'
import { TileValues } from '../../types/lots'
import './TileEditor.scss'

const TileEditor = ({ tiles, setTiles }: {tiles: TileValues[][], setTiles?: Function}) => {
  
  /*return (<div className="grid tile-grid">
    { tiles.map(row => {
      return <>
        { row.map(tile => {
            return <div className="tile"></div>
        }) }
      </div>
    }) }
  </div>)*/
  return <div></div>
}

export default TileEditor