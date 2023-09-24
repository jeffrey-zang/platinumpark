import { Link } from "react-router-dom"
import { FaList } from "react-icons/fa"
import { BiSolidCar, BiSolidCommentDetail } from "react-icons/bi"
import { HiViewGridAdd } from "react-icons/hi"

const Home = () => {
  return (
    <div className='p-12 w-[80vw] bg-[#fafafa]'>
      <h1>Home</h1>
      <p>Welcome to PlatinumPark!</p>

      <Link to='/all'>
        <div className='container mt-8 !pr-8 hoverable flex items-center justify-between'>
          <div>
            <h1>All Lots</h1>
            <p>View all of the lots in our database</p>
          </div>
          <FaList size={32} />
        </div>
      </Link>
      <Link to='/navigate/0'>
        <div className='container mt-8 !pr-8 hoverable flex items-center justify-between'>
          <div>
            <h1>Navigate</h1>
            <p>Navigate to a specific spot in a parking lot, then pay for the parking!</p>
          </div>
          <BiSolidCar size={32} />
        </div>
      </Link>
      <Link to='/create'>
        <div className='container mt-8 !pr-8 hoverable flex items-center justify-between'>
          <div>
            <h1>Create</h1>
            <p>Discover a parking lot somewhere? Add it to our website!</p>
          </div>
          <HiViewGridAdd size={32} />
        </div>
      </Link>
      <Link to='/review'>
        <div className='container mt-8 !pr-8 hoverable flex items-center justify-between'>
          <div>
            <h1>Review</h1>
            <p>Review some lots!</p>
          </div>
          <BiSolidCommentDetail size={32} />
        </div>
      </Link>

    </div>
  )
}

export default Home