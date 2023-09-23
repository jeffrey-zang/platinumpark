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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lots-grid w-full gap-4 mt-4'>
        {
          lots.map((lot, index) => {
            return (
              <div className='lot'>
                <h2>{lot.title}</h2>
                <p>{lot.address} • {lot.spots} spots</p>
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