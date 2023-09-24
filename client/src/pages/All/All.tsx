import './All.scss'
import { BiSolidCar, BiSolidCommentDetail } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LotContext } from '../../contexts/LotContext'

const All = () => {

  const context = useContext(LotContext)
  let lots = context.lots

  const navigate = useNavigate()

  return (
    <div className='p-12 all w-[80vw] bg-[#fafafa]'>
      <h1>All Lots</h1>
      <p>Here are all of the lots in our database. Simply select one to navigate to, plan a trip to, or write a review for.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lots-grid w-full gap-4 mt-4'>
        {
          lots.map((lot, index) => {
            return (
              <div className='lot container'>
                <h2 className='flex justify-between items-center'>
                  {lot.title}
                  <p className='text-lg'>
                    {
                      lot.reviews.length > 0 ? 
                      `${Math.round(lot.reviews.reduce((a, b) => a + b.rating, 0) / lot.reviews.length)} / 5` : 
                      'No Reviews'
                    }
                  </p>
                </h2>
                <p>{lot.address}</p>
                {/* <p>{lot.spots} spots • {(lot.price === 0) ? "Free" : `$${lot.price}.00`}</p> */}
                <p>Open {lot.open}</p>
                <img src={lot.image}></img>
                <div className='flex gap-2 items-center mt-4'>
                  <button className='w-full' onClick={() => navigate(`/lot/${index}`)}><BiSolidCar />Navigate</button>
                  <button className='w-full' onClick={() => navigate(`/review/${index}`)}><BiSolidCommentDetail />Review</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default All