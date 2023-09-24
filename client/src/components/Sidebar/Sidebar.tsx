import { NavLink } from "react-router-dom"
import { FaList } from "react-icons/fa"
import { BiSolidCar, BiSolidCommentDetail } from "react-icons/bi"
import { HiViewGridAdd } from "react-icons/hi"
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='p-8 bg-slate-100 !w-[20vw] h-screen border-r-[1px] border-r-slate-300 min-w-[15rem] sticky left-0 top-0'>
      <h1 className='mb-4'>
        <NavLink to="/">PlatinumPark</NavLink>
      </h1>
      <div className="sidebar-links mt-10">
        <NavLink to="/all">
          <FaList size={16} />
          <span>All Lots</span>
        </NavLink>
        <NavLink to="/navigate/0">
          <BiSolidCar size={16}/>
          <span>Navigate</span>
        </NavLink>
        <NavLink to="/create">
          <HiViewGridAdd size={16} />
          <span>Create Lot</span>
        </NavLink>
        <NavLink to="/review/0">
          <BiSolidCommentDetail size={16} />
          <span>Review</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar