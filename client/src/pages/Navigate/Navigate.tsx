import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { LotContext } from "../../contexts/LotContext";
import {shortestLotPath} from "./algorithm"

type Mode = "lotEntrance" | "buildingEntrance"

const Navigate = () => {
  let {id} = useParams()
  let {lots} = useContext( LotContext )

  if (!id) {
    return 
  }

  let [mode, setMode] = useState<>()
  let lot = lots[parseInt(id)]

  return (
    <div>Navigate</div>
  )
}

export default Navigate