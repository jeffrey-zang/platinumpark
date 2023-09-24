import { useParams } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { LotContext } from "../../contexts/LotContext";
import {shortestLotPath} from "./algorithm"
import { Tile } from "../../types/lots";
import "./Navigate.scss"

type Mode = "lotEntrance" | "buildingEntrance"

const Navigate = () => {
  let {id} = useParams()
  let {lots} = useContext( LotContext )
  let canvasRef = useRef<HTMLCanvasElement>(null)

  if (!id) {
    return 
  }

  let [mode, setMode] = useState<Tile>(Tile.LotEntrance)
  let lot = lots[parseInt(id)]
  
  useEffect(() => {
    let canvas = canvasRef.current
    let ctx = canvas!.getContext("2d")

    let unit = window.innerWidth * 0.75 / lot.spots[0].length

    if (!ctx) return

    ctx.clearRect(0, 0, unit * lot.spots[0].length, unit * lot.spots.length);
    
    ctx.lineWidth = 1;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "16px Verdana";
    ctx.globalCompositeOperation = "destination-over";

    for (let row = 0; row < lot.spots.length; row++) {
      for (let column = 0; column < lot.spots[0].length; column++) {
        if ([Tile.Spot, Tile.SpotTop, Tile.SpotRight, Tile.SpotBottom, Tile.SpotLeft, Tile.SpotX, Tile.SpotY].includes(lot.spots[row][column])) {
          ctx.fillStyle = "#FF0000"
          ctx.fillRect(column * unit, row * unit, unit, unit)
        } else if (lot.spots[row][column] == Tile.LotEntrance) {
          ctx.fillStyle = "#00FF00"
          ctx.fillRect(column * unit, row * unit, unit, unit)
        } else if (lot.spots[row][column] == Tile.BuildingEntrance) {
          ctx.fillStyle = "#0000FF"
          ctx.fillRect(column * unit, row * unit, unit, unit)
        } else if (lot.spots[row][column] == Tile.Blocked) {
          ctx.fillStyle = "#555"
          ctx.fillRect(column * unit, row * unit, unit, unit)
        }

        ctx.lineWidth = 2
        if (lot.spots[row][column] == Tile.SpotTop) {
          ctx.strokeStyle = "#FFF"
          ctx.beginPath()
          ctx.moveTo(column * unit, row * unit)
          ctx.lineTo(column * unit, row * unit + unit)
          ctx.lineTo(column * unit + unit, row * unit + unit)
          ctx.lineTo(column * unit + unit, row * unit)
          ctx.stroke()
        } else if (lot.spots[row][column] == Tile.SpotRight) {
          ctx.strokeStyle = "#FFF"
          ctx.beginPath()
          ctx.moveTo(column * unit + unit, row * unit)
          ctx.lineTo(column * unit, row * unit)
          ctx.lineTo(column * unit, row * unit + unit)
          ctx.lineTo(column * unit + unit, row * unit + unit)
          ctx.stroke()
        } else if (lot.spots[row][column] == Tile.SpotBottom) {
          ctx.strokeStyle = "#FFF"
          ctx.beginPath()
          ctx.moveTo(column * unit + unit, row * unit + unit)
          ctx.lineTo(column * unit + unit, row * unit)
          ctx.lineTo(column * unit, row * unit)
          ctx.lineTo(column * unit, row * unit + unit)
          ctx.stroke()
        } else if (lot.spots[row][column] == Tile.SpotLeft) {
          ctx.strokeStyle = "#FFF"
          ctx.beginPath()
          ctx.moveTo(column * unit, row * unit)
          ctx.lineTo(column * unit + unit, row * unit)
          ctx.lineTo(column * unit + unit, row * unit + unit)
          ctx.lineTo(column * unit, row * unit + unit)
          ctx.stroke()
        } else if (lot.spots[row][column] == Tile.SpotY) {
          ctx.strokeStyle = "#FFF"
          ctx.beginPath()
          ctx.moveTo(column * unit, row * unit)
          ctx.lineTo(column * unit, row * unit + unit)
          ctx.moveTo(column * unit + unit, row * unit + unit)
          ctx.lineTo(column * unit + unit, row * unit)
          ctx.stroke()
        } else if (lot.spots[row][column] == Tile.SpotX) {
          ctx.strokeStyle = "#FFF"
          ctx.beginPath()
          ctx.moveTo(column * unit, row * unit)
          ctx.lineTo(column * unit + unit, row * unit)
          ctx.moveTo(column * unit + unit, row * unit + unit)
          ctx.lineTo(column * unit, row * unit + unit)
          ctx.stroke()
        }
      }
    }

    // ctx.fillStyle = "#444";
    // ctx.strokeStyle = "#444";
    // for (let i = 0; i < lot.spots.length; i++) {
    //   ctx.beginPath();
    //   ctx.moveTo(0, i * unit);
    //   ctx.lineTo(lot.spots[0].length * unit, i * unit);
    //   ctx.stroke();
    // }
    // for (let i = 0; i < lot.spots[0].length; i++) {
    //   ctx.beginPath();
    //   ctx.moveTo(i * unit, 0);
    //   ctx.lineTo(i * unit, lot.spots.length * unit);
    //   ctx.stroke();
    // }

    ctx.fillStyle = "#AAA"
    ctx.fillRect(0, 0, unit * lot.spots[0].length, unit * lot.spots.length);
  }, [])

  useEffect(() => {
    let path = shortestLotPath(lot, mode)
    let canvas = canvasRef.current
    let ctx = canvas!.getContext("2d")

    let unit = window.innerWidth * 0.75 / lot.spots[0].length

    console.log(ctx, path)
    if (!ctx || !path) return

    ctx.strokeStyle = "#FFFF00"
    ctx.moveTo(path[0][0] * unit + unit / 2, path[0][1] * unit + unit / 2)
    for (let coord of path) {
      ctx.lineTo(coord[0] * unit + unit / 2, coord[1] * unit + unit / 2)
    }
    ctx.stroke()
  }, [mode])

  return (
    <div className='w-[80vw] p-12 bg-[#fafafa]'>
      <div className="container">
        <h1>Navigating {lot.title}</h1>
        <p>
          Current mode: {mode}
        </p>
        <button className='w-full mb-4 mt-4' onClick={() => setMode(Tile.LotEntrance)}>Closest to lot entrance</button> 
        <button className='w-full mb-4' onClick={() => setMode(Tile.BuildingEntrance)}>Closest to building entrance</button>
        <canvas ref={canvasRef} width={window.innerWidth * 0.75} height = {window.innerHeight}></canvas>
      </div>
    </div>
  )
}

export default Navigate