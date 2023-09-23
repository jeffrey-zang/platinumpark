import { useParams } from "react-router-dom";
import { useContext } from 'react'
import { LotContext } from '../../contexts/LotContext'

const Lot = () => {
  const { id: rawId } = useParams();
  
  const id = rawId ? parseInt(rawId) : 0;

  const context = useContext(LotContext)
  let lots = context.lots

  const lot = lots[id]

  return (
    <div className='bg-[#fafafa] w-[80vw] p-12'>
      <div className='container flex flex-col gap-4'>
        <h1>
          {lot.title}
        </h1>
        <img src={lot.image} className='w-full h-[400px] object-cover rounded-lg'></img>
        <p>
          {lot.address}
        </p>
      </div>
    </div>
  )
}

export default Lot