import { useState } from "react"
import { BiSolidCar, BiSolidCommentDetail } from "react-icons/bi"
import { LotContext } from "../../contexts/LotContext"
import { useContext } from "react"
import { LotType, TileValues } from "../../types/lots"
import { useNavigate } from "react-router-dom"
import TileEditor from "../../components/TileEditor/TileEditor"

const Create = () => {
  const { addLot } = useContext(LotContext)
  const navigate = useNavigate()

  const emptyLot: LotType = {
    title: '',
    address: '',
    description: '',
    spots: [[]],
    price: 0,
    image: '',
    open: '',
    reviews: []
  }

  const [newLot, setNewLot] = useState<LotType>(emptyLot)
  const [step, setStep] = useState(1)
  const [tiles, setTiles] = useState<TileValues[][]>(Array(12).fill(Array(12).fill(2)))

  const updateNewLot = (name: string, value: any) => {
    setNewLot(lot => ({ ...lot, [name]: value}))
  }

  const handleClick = () => {
    addLot(newLot)
    setNewLot(emptyLot)
    navigate('/all')
  }

  if (step === 1) return (
    <div className='px-48 pt-12 all w-[80vw] bg-[#fafafa]'>
      <h1 className="text-center text-[2.5rem]">Create lot</h1>
      <p className="text-center text-[1.1rem]">Discover a parking lot in the middle of nowhere? Add it to our database!</p>
      <div className='grid grid-cols-1 w-full gap-x-8 gap-y-2 mt-4'>

      <div className="input-field">
          <label htmlFor="name">Title</label>
          <input
            name='title'
            value={newLot.title}
            onChange={e => updateNewLot('title', e.target.value)}
            placeholder="Parking Lot A"
          />
        </div>

        <div className="input-field">
          <label htmlFor="description">Description</label>
          <input
            name='description'
            value={newLot.description}
            onChange={e => updateNewLot('description', e.target.value)}
            placeholder="Desc Desc Desc pls change this"
          />
        </div>

        <div className="input-field">
          <label htmlFor="address">Address</label>
          <input
            name='address'
            value={newLot.address}
            onChange={e => updateNewLot('address', e.target.value)}
            placeholder="200 University Ave W"
          />
        </div>

        <div className="input-field">
          <label htmlFor="price">Price</label>
          <input
            name='price'
            value={newLot.price || ''}
            type="number"
            min={1}
            max={100}
            onChange={e => updateNewLot('price', e.target.value)}
            placeholder="3.00"
          />
        </div>

        <div className="input-field">
          <label htmlFor="price">Days Open</label>
          <input
            name='open'
            value={newLot.open || ''}
            onChange={e => updateNewLot('open', e.target.value)}
            placeholder="Monday-Friday, 9am-11pm"
          />
        </div>

        <div className="input-field">
          <label htmlFor="image">Image URL</label>
            <input
              name="image"
              value={newLot.image}
              onChange={e => updateNewLot('imageUrl', e.target.value)}
              placeholder="https://imageurl.com/parking-lot-a"
            />
          </div>
        </div>
        <button className="mt-4" onClick={() => setStep(2)}>Next</button>
    </div>
  )
  
  else return (
    <div className="p-12">
      
      <TileEditor tiles={tiles} setTiles={setTiles} />
      <button className="mt-4" onClick={handleClick}>Create Lot</button>
    </div>
  )
}

export default Create