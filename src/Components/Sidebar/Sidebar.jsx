import './Sidebar.css'
import { MdOutlineAddBox } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink , Outlet} from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="left">
            <div className="title">
                <h1>TODO</h1>
            </div>
            <div className="icons">
                <NavLink to="/add" className={({isActive}) =>{isActive}}>
                    <div className="on-icon">
                        <MdOutlineAddBox style={{fontSize:"50px", color:"#fff"}}/>
                    </div>
                </NavLink>
                <NavLink to="/completed" className={({isActive}) =>{isActive}}>
                    <div className="on-icon">
                        <FaCheck style={{fontSize:"50px", color:"seagreen"}}/>
                    </div> 
                </NavLink>
                <NavLink to="/favorite" className={({isActive}) =>{isActive}}>
                    <div className="on-icon">
                        <IoMdHeartEmpty style={{fontSize:"50px", color:"#fff" }}/>
                    </div>
                </NavLink>
            </div>
        </div>
        <Outlet/>
      
    </div>
  )
}

export default Sidebar
