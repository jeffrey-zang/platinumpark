import { NavLink } from "react-router-dom"
import { FaList } from "react-icons/fa"
import { BiSolidCar, BiSolidCommentDetail } from "react-icons/bi"
import { HiViewGridAdd } from "react-icons/hi"
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='p-8 bg-slate-50 w-1/6 h-screen'>
      <h1 className='mb-4'>
        <NavLink to="/">PlatinumPark</NavLink>
      </h1>
      <div className="sidebar-links mt-8">
        <NavLink to="/all">
          <FaList size={16} />
          <span>All Lots</span>
        </NavLink>
        <NavLink to="/navigate">
          <BiSolidCar size={16}/>
          <span>Navigate</span>
        </NavLink>
        <NavLink to="/create">
          <HiViewGridAdd size={16} />
          <span>Create Lot</span>
        </NavLink>
        <NavLink to="/review">
          <BiSolidCommentDetail size={16} />
          <span>Review</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar