import { useParams, useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { LotContext } from '../../contexts/LotContext'
import { BsPinFill } from 'react-icons/bs'
import { BiSolidCar, BiSolidStar } from "react-icons/bi"
import { AiFillClockCircle } from "react-icons/ai"
import { Rating, RoundedStar } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Lot = () => {
  const { id: rawId } = useParams();
  
  const id = rawId ? parseInt(rawId) : 0;

  const context = useContext(LotContext)
  let lots = context.lots

  const navigate = useNavigate()

  const lot = lots[id]

  return (
    <div className='bg-[#fafafa] w-[80vw] p-12'>
      <div className='container flex flex-col gap-4 !p-8'>
        <h1 className='flex items-center justify-between'>
          <p>{lot.title}</p>
          <p className='text-2xl'>
            {
              lot.reviews.length > 0 ? 
              `${Math.round(lot.reviews.reduce((a, b) => a + b.rating, 0) / lot.reviews.length)} / 5` : 
              'No Reviews'
            }
          </p>
        </h1>
        <img src={lot.image} className='w-full h-[400px] object-cover rounded-lg'></img>
        <div className='flex gap-4 items-center justify-between'>
          <p className='bg-slate-200 text-xl p-2 rounded-lg flex items-center gap-2 w-full justify-center'><BsPinFill />{lot.address}</p>
          <p className='bg-slate-200 text-xl p-2 rounded-lg flex items-center gap-2 w-full justify-center'><BiSolidCar />{lot.spots.length} spots available</p>
          <p className='bg-slate-200 text-xl p-2 rounded-lg flex items-center gap-2 w-full justify-center'><AiFillClockCircle />{lot.open}</p>
        </div>
        <p>
          {lot.description}
        </p>
        <button className="contrast" onClick={() => navigate(`/all`)}>Back to home</button>
        <button onClick={() => navigate(`/navigate/${id}`)}>Start Navigation</button>
      </div>
      <h1 className='mt-4'>Reviews for {lot.title}</h1>
      {
        lot.reviews.map((value, index) => {
          return (
            <div className='container mt-4'>
              <div className='flex items-center justify-between'>
                <h2>{value.title}</h2>
                <Rating
                  readOnly={true}
                  style={{
                    maxWidth: '200px'
                  }}
                  itemStyles={{
                    itemShapes: RoundedStar,
                    activeFillColor: '#FFD000',
                    inactiveFillColor: '#dfdfdf'
                  }}
                  value={value.rating}
                />
              </div>
              <p>
                {value.description}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Lot