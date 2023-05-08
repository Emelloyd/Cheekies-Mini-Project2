import React from 'react'
import { FaTimes } from 'react-icons/fa'

const sidebar = () => {
  return (
    <div className='sidebar-header'>
        <img src="cheekies.png" width={180} />
        <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
    <nav>
      <ul className="main-menu">
        {menus.map((item)=><li>
        <Link to={item.path}>{item.label}</Link>
        </li>)}
      </ul>
    </nav>
    </div>
    
  )
}

export default sidebar
