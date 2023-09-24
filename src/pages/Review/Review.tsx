import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'
import { LotContext } from '../../contexts/LotContext'
import { ReviewType } from "../../types/lots";

const Lot = () => {
  const { id: rawId } = useParams();
  
  const id = rawId ? parseInt(rawId) : 0;

  const context = useContext(LotContext)
  let lots = context.lots

  const navigate = useNavigate()

  const empty: ReviewType = {
    rating: 0,
    title: '',
    description: '',
  }

  const [newReview, setNewReview] = useState<ReviewType>(empty)

  const lot = lots[id]

  const updateNewReview = (name: string, value: any) => {
    setNewReview(review => ({ ...review, [name]: value}))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    lot.reviews.push(newReview)
    context.updateLot(id, lot)
    navigate(`/lot/${id}`)
  }

  return (
    <div className='bg-[#fafafa] w-[80vw] p-12'>
      <h1>Write a review for {lot.title}</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-field mt-8">
          <label htmlFor="rating">Rating</label>
          <input
            name='rating'
            value={newReview.rating}
            onChange={e => updateNewReview('rating', e.target.value)}
            placeholder="5"
            type='number'
          />
        </div>

        <div className="input-field">
          <label htmlFor="name">Review Title</label>
          <input
            name='title'
            value={newReview.title}
            onChange={e => updateNewReview('title', e.target.value)}
            placeholder="I love this parking lot"
          />
        </div>

        <div className="input-field">
          <label htmlFor="name">Review Description</label>
          <textarea
            name='title'
            className='h-32 bg-slate-100 rounded-lg p-2 border-[1px] border-[#cbd5e1] w-full'
            placeholder='This parking lot is the best!'
            value={newReview.description}
            onChange={e => updateNewReview('description', e.target.value)}
          />
        </div>

        <button className='mt-4'>Submit</button>
      </form>

    </div>
  )
}

export default Lot