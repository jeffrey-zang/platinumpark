import { useState } from "react"
import { BiSolidCar, BiSolidCommentDetail } from "react-icons/bi"
import './Create.scss'

const Create = () => {
  const [newLot, setNewLot] = useState({
    name: '',
    address: '',
    spots: 0,
    imageUrl: '',
  })

  const updateNewLot = (name: string, value: any) => {
    console.log(name, value)
    setNewLot(lot => ({ ...lot, [name]: value}))
  }

  const handleClick = () => {
    setNewLot({
      name: '',
      address: '',
      spots: 0,
      imageUrl: '',
    })
  }

  return (
    <div className='p-12 all w-[80vw] bg-[#fafafa]'>
      <h1>Create lot</h1>
      <p>Create a lot.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-x-8 gap-y-2 mt-4'>

        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            name='name'
            value={newLot.name}
            onChange={e => updateNewLot('name', e.target.value)}
            placeholder="Parking Lot A"
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
          <label htmlFor="image">Image URL</label>
            <input
              name="image"
              value={newLot.imageUrl}
              onChange={e => updateNewLot('imageUrl', e.target.value)}
              placeholder="https://imageurl.com/parking-lot-a"
            />
          </div>
        </div>
        <button className="mt-4" onClick={handleClick}>Create lot</button>
      </div>
  )
}

export default Create